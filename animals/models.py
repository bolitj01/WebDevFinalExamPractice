from django.db import models

# Animal model with a name and picture
class Animal(models.Model):
    name = models.CharField(max_length=100, unique=True)
    picture = models.ImageField(upload_to='animals', blank=True)

    def __str__(self):
        return self.name