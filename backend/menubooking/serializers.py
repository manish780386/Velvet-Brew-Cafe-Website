from rest_framework import serializers
from .models import MenuOrder

class MenuOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuOrder
        fields = "__all__"
    
    def validate_items(self, value):
        # Ensure each item has required fields
        for item in value:
            if not all(k in item for k in ["id", "name", "price", "qty"]):
                raise serializers.ValidationError(
                    "Each item must have id, name, price, and qty"
                )
        return value