from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MenuOrder
from .serializers import MenuOrderSerializer


# ADD ORDER
@api_view(["POST"])
def add_order(request):
    serializer = MenuOrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Order Added ✅"})
    return Response(serializer.errors, status=400)


# GET ALL ORDERS
@api_view(["GET"])
def all_orders(request):
    orders = MenuOrder.objects.all().order_by("-created_at")
    serializer = MenuOrderSerializer(orders, many=True)
    return Response(serializer.data)


# DELETE ORDER
@api_view(["DELETE"])
def delete_order(request, id):
    try:
        order = MenuOrder.objects.get(id=id)
        order.delete()
        return Response({"message": "Order Deleted ❌"})
    except MenuOrder.DoesNotExist:
        return Response({"error": "Order Not Found"}, status=404)