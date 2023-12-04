"""
    core/models.py

    TimeStampedModel is an abstract base class that includes automatic timestamp fields.

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
"""

from datetime import datetime 
import uuid
from model_utils import Choices

from django.db import models

from todoproj import settings

class TimeStampedModel(models.Model):
    # Field which stores the timestamp of when the instance was created, set only once upon creation.
    created_on = models.DateTimeField(auto_now_add=True)  
    
    # Field which stores the timestamp of the last modification. It updates each time the instance is saved.
    modified_on = models.DateTimeField(auto_now=True)  

    class Meta:
        abstract = True  # Indicates that this model should not be used to create any database table on its own.