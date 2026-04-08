from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MenuOrder
from .serializers import MenuOrderSerializer

@api_view(["POST"])
def add_order(request):
    data = request.data.copy()
    
    # Clean items — only save needed fields
    cleaned_items = []
    for item in data.get("items", []):
        cleaned_items.append({
            "id": item.get("id"),
            "name": item.get("name"),
            "price": item.get("price"),
            "qty": item.get("qty", 1),
            "subtotal": item.get("price", 0) * item.get("qty", 1)
        })
    data["items"] = cleaned_items

    serializer = MenuOrderSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Order Placed ✅"})
    return Response(serializer.errors, status=400)

@api_view(["GET"])
def all_orders(request):
    orders = MenuOrder.objects.all().order_by("-created_at")
    serializer = MenuOrderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(["DELETE"])
def delete_order(request, id):
    try:
        order = MenuOrder.objects.get(id=id)
        order.delete()
        return Response({"message": "Order Deleted ❌"})
    except MenuOrder.DoesNotExist:
        return Response({"error": "Not Found"}, status=404)