"""
    todoapi/models.py

    Task: Django model definitions for the Task.

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
"""

from django.db import models

from datetime import date

from core.models import TimeStampedModel

# Stores a task
class Task(TimeStampedModel):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=255)

    # Field for the location associated with the task; requires a maximum length of 255 characters
    location = models.CharField(max_length=255)
    # Optional float field to record temperature for the current location
    temperature = models.FloatField(null=True, blank=True)
    # task status: true(done) - false(pending)
    # TODO: create TASK_CHOISES to record more statuses like assigned, declined, paused etc.
    is_done = models.BooleanField(default=False)
    due_date = models.DateField(null=True, blank=True)

    # Meta data about the database table.
    class Meta:
        # Set the table name.
        db_table = 'task'

        # Set default ordering so more recent tasks are showned in the admin panel
        ordering = ['created_on']

    # Define what to output when the model is printed as a string.
    def __str__(self):
        return f'id: {self.id} - title: {self.title} - status: {self.is_done}'
    



