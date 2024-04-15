from django.db import models

# Animal model with a name and image URL
class Animal(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.URLField()

    def __str__(self):
        return self.name