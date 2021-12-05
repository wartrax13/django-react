from django.contrib import admin
from .views import main

urlpatterns = [
    path('', main),
]