from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

from src import settings

DEFAULT_USER_ROLES = ['user']


class Account(models.Model):
    """
    An account is for a team of users, or a single customer
    """
    name = models.CharField(max_length=100, unique=True)
    admins = models.ManyToManyField('AccountUser', related_name='+', blank=True)
    metadata = models.JSONField(default=dict, blank=True)

    def __str__(self):
        admins_obj = self.admins.all()
        admins_list = []
        for admin in admins_obj:
            admins_list.append(admin.username)

        if admins_list:
            admins_list = ','.join(admins_list)
        else:
            admins_list = 'no admins'
            
        return f'account name: {self.name} (id: {self.id}) - admins: {admins_list}' 

class AccountUser(AbstractUser):
    """
    A user belonging to an account
    """
    account = models.ForeignKey('Account', related_name='users', on_delete=models.CASCADE,
                                default=settings.DEFAULT_ACCOUNT_PK)
    
    @property
    def roles(self):
        roles = [role.name for role in self.profile.roles.all()]
        return roles

    class Meta:
        ordering = ('username', )

    def __str__(self):
        return f'username: {self.username} (id: {self.id} - account: {self.account.name})'

class UserProfile(models.Model):
    """
    A holder for the roles a user has
    """
    user = models.OneToOneField('AccountUser', related_name='profile', on_delete=models.CASCADE)
    roles = models.ManyToManyField('UserRole', related_name='+', blank=True)

    class Meta:
        ordering = ('user__username', )

    def __str__(self):
        roles_obj = self.roles.all()
        roles_list = []
        for role in roles_obj:
            roles_list.append(role.name)

        if roles_list:
            roles_list = ','.join(roles_list)
        else:
            roles_list = 'no roles'
            
        return f'username: {self.user.username} (id: {self.id}) - roles: {roles_list}'
    

class UserRole(models.Model):
    """
    A user's role in the system
    """
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

def create_user_profile(sender, **kwargs):
    """Create a user's profile on first save, along with the user's roles"""
    if kwargs.get('created'):
        roles = UserRole.objects.filter(name__in=DEFAULT_USER_ROLES)
        profile, _ = UserProfile.objects.get_or_create(user=kwargs.get('instance'))
        profile.roles.add(*roles)


# Auto-generate a user profile for each User
models.signals.post_save.connect(create_user_profile, sender=AccountUser)
