from django.contrib import admin
from .models import Project
from .models import Service
from .models import Member
from .models import Contact
from .models import Volunteer
from .models import NewProject
from .models import Blog
# Register your models here.

admin.site.register(Project)
admin.site.register(Service)
admin.site.register(Member)
admin.site.register(Contact)
admin.site.register(Volunteer)
admin.site.register(NewProject)
admin.site.register(Blog)