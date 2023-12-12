from django.contrib import admin
from accounts.models import Account, AccountUser, UserProfile, UserRole 


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    pass


@admin.register(AccountUser)
class AccountAdmin(admin.ModelAdmin):
    pass


@admin.register(UserProfile)
class AccountAdmin(admin.ModelAdmin):
    pass


@admin.register(UserRole)
class AccountAdmin(admin.ModelAdmin):
    pass
