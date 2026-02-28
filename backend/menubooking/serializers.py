from rest_framework import serializers
from .models import MenuOrder

class MenuOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuOrder
        fields = "__all__"