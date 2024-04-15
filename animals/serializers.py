# Animal serializer
from rest_framework import serializers
from .models import Animal # Expects a model named Animal

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = '__all__'