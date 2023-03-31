from django.urls import path
from . import controller
from . import locator

urlpatterns = [
    path('', controller.index),
    path('news', controller.news),
    path('location', locator.locate),
]
