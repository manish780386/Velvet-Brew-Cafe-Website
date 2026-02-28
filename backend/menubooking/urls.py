from django.urls import path
from .views import add_order, all_orders, delete_order

urlpatterns = [
    path("add/", add_order),
    path("all/", all_orders),
    path("delete/<int:id>/", delete_order),
]