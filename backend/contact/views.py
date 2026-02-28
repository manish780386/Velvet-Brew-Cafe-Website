from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer

# Add message
@api_view(["POST"])
def add_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Message Saved"})
    return Response(serializer.errors)

# Get all messages
@api_view(["GET"])
def get_messages(request):
    msgs = ContactMessage.objects.all().order_by("-id")
    serializer = ContactMessageSerializer(msgs, many=True)
    return Response(serializer.data)

# Delete message
@api_view(["DELETE"])
def delete_message(request, id):
    msg = ContactMessage.objects.get(id=id)
    msg.delete()
    return Response({"message": "Deleted"})