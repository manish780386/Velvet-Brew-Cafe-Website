from django.urls import path
from . import views

urlpatterns = [
    path("add/", views.add_message),
    path("all/", views.get_messages),
    path("delete/<int:id>/", views.delete_message),
]