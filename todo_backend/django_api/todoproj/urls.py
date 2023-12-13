"""
URL configuration for todoproj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from todoapi import views as todoapi_views

# TODO: if we plan to expand the app URLS hould nbe moved into the related apps
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/task/', todoapi_views.TaskList.as_view(), name='task-list'),
    path('api/task/<int:task_id>/', todoapi_views.TaskDetail.as_view(), name='task-detail'),
]
