from django.urls import path
from . import views

urlpatterns = [
    path('', views.AnimalView.as_view(), name='animals'),
    path('<str:name>/', views.AnimalView.as_view(), name='animal'),
]