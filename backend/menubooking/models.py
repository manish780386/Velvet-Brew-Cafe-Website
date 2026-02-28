from django.db import models

class MenuOrder(models.Model):
    name = models.CharField(max_length=100)
    table_number = models.CharField(max_length=20)
    message = models.TextField(blank=True)
    items = models.JSONField()     # cart items save karega
    total = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - Table {self.table_number}"