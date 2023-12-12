from rest_framework import serializers
from accounts.models import AccountUser, Account


class AccountDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = ['name', 'id']
        read_only_fields = ['name', 'id']


class UserSerializer(serializers.ModelSerializer):

    roles = serializers.SerializerMethodField()
    account = AccountDetailSerializer()

    class Meta:
        model = AccountUser
        fields = ['username', 'email', 'roles', 'account']
        read_only_fields = ['username', 'email',
                            'roles', 'account']

    def get_roles(self, instance):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            return request.user.roles
        else:
            return []


class AccountSerializer(serializers.ModelSerializer):

    customers = serializers.SerializerMethodField()

    class Meta:
        model = Account
        fields = ['name', 'id']
        read_only_fields = ['name', 'id']


class ChangePasswordSerializer(serializers.Serializer):
    model = AccountUser

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
