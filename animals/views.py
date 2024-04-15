from email import header
from math import e
import stat
from .serializers import AnimalSerializer
from .models import Animal
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status

# API View for creating and finding an animal
class AnimalView(APIView):
    # Get a desired animal
    def get(self, request, name):
        try:
            animal = Animal.objects.get(name=name)
        except Animal.DoesNotExist:
            return HttpResponse("Animal not found.", content_type="text/plain", status=status.HTTP_404_NOT_FOUND)
        
        print(f"Animal: {animal}")
        serializer = AnimalSerializer(animal)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Create an animal
    def post(self, request):
        print(f"Request: {request.data}")
        serializer = AnimalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse("Animal created.", status=status.HTTP_201_CREATED)
    
    # Delete all animals
    def delete(self, request):
        Animal.objects.all().delete()
        print("All animals deleted.")
        return HttpResponse("All animals deleted.", 
                            headers={"Content-Type": "text/plain"},
                            status=status.HTTP_200_OK)