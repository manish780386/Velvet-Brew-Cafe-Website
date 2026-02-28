from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Booking
from .serializers import BookingSerializer

@api_view(["POST"])
def add_booking(request):
    s = BookingSerializer(data=request.data)
    if s.is_valid():
        s.save()
        return Response({"ok": True})
    return Response(s.errors)

@api_view(["GET"])
def all_bookings(request):
    data = Booking.objects.all().order_by("-id")
    s = BookingSerializer(data, many=True)
    return Response(s.data)

@api_view(["DELETE"])
def delete_booking(request, id):
    Booking.objects.get(id=id).delete()
    return Response({"deleted": True})