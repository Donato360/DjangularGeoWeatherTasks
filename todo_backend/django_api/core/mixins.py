"""
    core/mixins.py

    AuthenticatedMixin: abstract base class that includes adds authentication and permission classes to views.

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
"""

from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework import permissions


class AuthenticatedMixin(object):
    """
    Adds default authentication classes
    """
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (OAuth2Authentication, )