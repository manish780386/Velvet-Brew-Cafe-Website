from django.urls import path
from . import views

urlpatterns = [
    path("add/", views.add_booking),
    path("all/", views.all_bookings),
    path("delete/<int:id>/", views.delete_booking),
]