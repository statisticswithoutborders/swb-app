from django.contrib import admin
from .models import Project
from .models import Service
from .models import Member

# Register your models here.

admin.site.register(Project)
admin.site.register(Service)
admin.site.register(Member)