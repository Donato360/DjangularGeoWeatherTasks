"""
    accounts/views.py

    Copyright TotalSim Ltd, 2021 all rights reserved
        Donato Cappiello (dcappiello@totalsim.co.uk)

    The contents of this file are NOT for redistribution
    Please see the README.md file distributed with this source code
"""
from django.template import RequestContext
from rest_framework import generics
from django.conf import settings
from django.core.mail import EmailMessage
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponseBadRequest, HttpResponse
from django.db.models import Q
from random import choice

from accounts.serializers import UserSerializer, AccountSerializer, ChangePasswordSerializer
from accounts.models import AccountUser, Account, UserRole
from core.mixins import AuthenticatedMixin
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from itsdangerous import URLSafeTimedSerializer, BadSignature, SignatureExpired

import logging

logger = logging.getLogger(__name__)

timed_serializer = URLSafeTimedSerializer(settings.SECRET_KEY)

PASSWORD_RESET_EMAIL_BODY = """
A password reset has been requested for your CTR Bramble account.
Click the link below to reset your password.
Please contact Admin (dino.cappiello@gmail.com) if you did not request this reset.

{}/reset/{}
"""
EXISTING_USER_EMAIL_BODY = """
<p><strong>{user}</strong> has requested that you add the CTR <strong>{account}</strong> account to your list of available accounts.<br>
Click the link below to add this account.<br>
Please contact Admin (dino.cappiello@gmail.com) if you did not expect this activation request.<br>
<br>
<a href={url}/existing/{token}>Click here to activate the account</a></p>
"""
NEW_USER_EMAIL_BODY = """
<p><strong>{user}</strong> has requested that you join their CTR <strong>{account}</strong> account.<br>
Click the link below to create to activate your account.<br>
Please contact Admin (dino.cappiello@gmail.com) if you did not expect this activation request.<br>
<br>
<a href={url}/new/{token}>Click here to activate the account</a></p>
"""


class UserList(AuthenticatedMixin, generics.ListAPIView):
    """
    Retrieve a user's details, including which queues they can use
    """

    queryset = AccountUser.objects.all()
    serializer_class = UserSerializer


class UserDetail(AuthenticatedMixin, generics.RetrieveAPIView):
    """
    Retrieve a user's details, including which queues they can use
    """

    queryset = AccountUser.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        """Can only get the logged in user"""
        return self.request.user


class AccountList(AuthenticatedMixin, generics.ListAPIView):
    """
    Retrieve a list of account names/ids
    """

    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def filter_queryset(self, queryset):
        queryset = super(AccountList, self).filter_queryset(queryset)\
            .filter(pk=self.request.user.account.pk)
        return queryset


class ChangePasswordView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """
    serializer_class = ChangePasswordSerializer
    model = AccountUser
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(('POST',))
@permission_classes([IsAuthenticated])
def send_email_accounts(request):
    """
    Sends link to  user e-mail  to activate accounts.
    """
    try:
        user_is_admin = False
        username = request.data['username']
        email = request.data['email']
        account_id = request.data['accountId']
        is_administrator = request.data['isAdministrator']
        admin_id = request.data['adminId']
        user = AccountUser.objects.filter(email=email).exists()
        user_is_admin = Account.objects.get(
            id=account_id).admins.filter(id=admin_id)

        if user_is_admin:
            admin_account_exists = True

        if admin_account_exists:
            token = timed_serializer.dumps({'username': username, 'email': email, 'account': account_id,
                                           'administrator': is_administrator}, salt=settings.SIGNED_SERIALIZER_SALT)
            admin_name = AccountUser.objects.get(id=admin_id).username
            account_name = Account.objects.get(id=account_id).name

            msg = EmailMessage('Bramble Account Activation', NEW_USER_EMAIL_BODY.strip().format(
                user=admin_name, account=account_name, url=request.data['url_root'], token=token), settings.DEFAULT_FROM_EMAIL, [email],)
            msg.content_subtype = "html"
            msg.send()
        else:
            return HttpResponseBadRequest('Admin cannot activate user accounts', Exception)
    except Exception as e:
        logger.error(e)
        return HttpResponseBadRequest('Error in sending mail', Exception)

    return Response('Link has been sent to the mail ', status=200)


@api_view(('GET',))
@permission_classes([IsAuthenticated])
def get_account_users(request):
    """
    Get all the user details of the requested account
    """

    try:
        account_id = request.query_params.get('accountId')

        result_list = []

        users = AccountUser.objects.filter(account=account_id)

        for user in users:
            if 'administrator' in user.roles:
                current_user = {'id': user.id, 'username': user.username,
                                'email': user.email, 'role': 'administrator'}
            else:
                current_user = {'id': user.id, 'username': user.username,
                                'email': user.email, 'role': 'student'}

            result_list.append(current_user)

    except Exception as e:
        logger.error(e)
        return HttpResponseBadRequest('Error in getting users', Exception)

    return Response({'accounts': result_list})


def make_password(length=8):
    """Generate a random character password"""
    return ''.join([choice('abcdefghijklmnopqrstuvwxyz0123456789%^*(-_=+)') for i in range(length)])


def create_new_account(name):
    """Create a new account"""
    account, _ = Account.objects.get_or_create(name=name)
    return account


def create_new_user(account=None, username=None, email=None, password=None, administrator=False, **kwargs):
    """Create a new user account"""
    if not password:
        password = make_password()

    # Use a string to identify the account, and create if needed
    if isinstance(account, str):
        account = create_new_account(account)

    user, created = AccountUser.objects.get_or_create(
        username=username, account=account, defaults=kwargs)
    if password:
        user.set_password(password)
        user.save()

    if administrator:
        # Try get restricted_access user role and apply to the new user
        # If this fails, do not raise exception but alert user of failure
        try:
            administrator_role = UserRole.objects.get(name='administrator')
            # Automatically applied to DB
            user.profile.roles.add(administrator_role)
        except ObjectDoesNotExist:
            print('*Warning* Failed to apply restricted access to new user.')

    # Email address can be supplied in kwargs. If it hasn't, see if username is email address and apply
    if not email:
        if '@' in user.username:
            user.email = user.username
            user.save(update_fields=['email'])
            print(
                '*Warning* Automatically set {} email to {}.'.format(user.username, user.email))
    else:
        user.email = email
        user.save(update_fields=['email'])

    return user, password


@api_view(['POST'])
@permission_classes([])
def activate_accounts(request):
    """
    Activates the account, whenever link has been activated for existing user. New user will be created and activated, when there is no user account:
    If the user and account already exists, it sends an exception
    If the link is wrong or expired, it sends an exception
    """
    try:
        parameters = timed_serializer.loads(
            request.data['token'], salt=settings.SIGNED_SERIALIZER_SALT, max_age=86400)

        username = parameters['username']
        email = parameters['email']
        account_id = parameters['account']
        password = request.data['password']
        administrator = parameters['administrator']

        account_user_exists = AccountUser.objects.filter(
            email=email, account=account_id).exists()
        account = Account.objects.get(id=account_id)

        if account_user_exists:
            return HttpResponseBadRequest('Account has already been activated.')
        if not account_user_exists:
            create_new_user(account, username, email, password, administrator)
            user = AccountUser.objects.get(email=email)
            user.is_active = True
            user.is_staff = False
            user.is_superuser = False
        else:
            user = AccountUser.objects.get(email=email)
        if user.account is None:
            user.account = account
            user.is_active = True
            user.is_staff = False
            user.is_superuser = False
        user.save()
    except SignatureExpired as e:
        logger.error(e)
        return HttpResponseBadRequest('Link has expired. Please generate a new link')
    except BadSignature as e:
        logger.error(e)
        return HttpResponseBadRequest('Could not verify password reset securely. Try generating a new link')
    except Exception as e:
        logger.error('error: %s', e)
        return HttpResponseBadRequest('exception', Exception)
    return Response('Account has been activated', status=200)


@api_view(['POST'])
@permission_classes([])
def remove_available_accounts(request):
    """
    Remove account access by removing the accounts from 'available accounts' from user accounts.
    """
    try:
        user_id = request.data['userId']
        account_id = request.data['accountId']
        user = AccountUser.objects.get(id=user_id)

        if user and int(user.account.id) == int(account_id):
            user.delete()
    except AccountUser.DoesNotExist as e:
        logger.error(e)
        return HttpResponseBadRequest('Could not find that username')
    except Exception as e:
        logger.error(e)
        return HttpResponseBadRequest('exception', Exception)

    return Response(status=200)


@api_view(('POST',))
@permission_classes([IsAuthenticated])
def user_last_app(request):
    try:
        username = request.data['username']
        account_id = int(request.data['accountId'])
        last_used_app = int(request.data['last_used_app'])

        user = AccountUser.objects.get(username=username)
        app = RigApp.objects.get(id=last_used_app)

        if app:
            if user and int(user.account.id) == account_id:
                user.last_used_app = app
                user.save(update_fields=['last_used_app'])

    except AccountUser.DoesNotExist as e:
        logger.error(e)
        return HttpResponseBadRequest('Could not find that username')
    except Exception as e:
        logger.error('error: %s', e)
        return HttpResponseBadRequest('exception', Exception)

    return Response(status=200)
