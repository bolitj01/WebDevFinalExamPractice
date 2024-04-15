from .serializers import AnimalSerializer
from .models import Animal # Expects a model named Animal
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status

# TODO API View for creating, searching, deleting animals
class AnimalView(APIView):
    