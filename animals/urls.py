from django.urls import path
from . import views

urlpatterns = [
    path('', views.animals, name='animals'),
    path('<int:animal_id>/', views.animal, name='animal'),
]