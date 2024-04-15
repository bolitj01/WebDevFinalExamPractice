from .serializers import AnimalSerializer
from .models import Animal
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# API View for creating and finding an animal
class AnimalView(APIView):
    # Get a desired animal
    def get(self, request, name):
        animal = Animal.objects.filter(name=name)
        serializer = AnimalSerializer(animal, many=True)
        return Response(serializer.data)

    # Create an animal
    def post(self, request):
        serializer = AnimalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Delete all animals
    def delete(self, request):
        Animal.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)