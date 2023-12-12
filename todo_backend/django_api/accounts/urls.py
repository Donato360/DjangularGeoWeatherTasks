from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from accounts import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('user/', views.UserDetail.as_view()),
    path('', views.AccountList.as_view()),
    path('change_password/', views.ChangePasswordView.as_view(), name='change_password'),
    path('send_email_accounts/', views.send_email_accounts, name='send_email_accounts'),
    path('get_account_users/', views.get_account_users, name='get_account_users'),
    path('activate_accounts/', views.activate_accounts, name='activate-accounts'),
    path('remove_accounts/', views.remove_available_accounts, name='remove-accounts'),
    path('get_account_apps/', views.get_account_apps, name='get_account_users'),
    path('user_last_app/', views.user_last_app, name='user_last_app'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
