"""
    todoapi/views.py

    TaskList: GET requests to list all Task objects

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
"""

from django.http import Http404
from rest_framework.views import APIView
from rest_framework import generics 

from .models import Task
from .serializers import TaskSerializer
    
class TaskList(generics.ListCreateAPIView):
    # List/create tasks.
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    # Get, Update, Delete single Task by id
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'task_id'
        