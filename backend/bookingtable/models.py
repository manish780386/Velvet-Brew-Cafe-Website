from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    guests = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()
    message = models.TextField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name