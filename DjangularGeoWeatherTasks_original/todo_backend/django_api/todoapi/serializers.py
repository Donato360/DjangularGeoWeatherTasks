"""
    todoapi/serializers.py

    TaskSerializer: converts Task model into JSON for APIs processing/data excahnge

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
"""

from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    # Nested Meta class contains metadata for the `TaskSerializer` class
    class Meta:
        model = Task
        # Fields included in the serialized output
        fields = (
            'id',             # Field for the task's title
            'title',          # Field for the task's title
            'description',    # Field for the task's description
            'location',       # Field for the location related to the task
            'temperature',    # Field for temperature value related to the task
            'description',    # This field is duplicated and should be reviewed
            'is_done',        # Boolean field indicating if the task is completed
            'created_on',     # Datetime field for when the task was created
            'modified_on'     # Datetime field for when the task was last modified
        )
