from django.db import models

# Create your models here.


class Service(models.Model):
    service_name = models.CharField(max_length=100, unique=True, default=" ")

    def __str__(self):
        return self.service_name


class Project(models.Model):
    project_title = models.CharField(max_length=200)
    project_tag = models.CharField(max_length=100, default=" ")
    project_location = models.CharField(max_length=100, default=" ")
    photo_urlOne = models.TextField(default='urlOne')
    photo_urlTwo = models.TextField(default='urlTwo')
    photo_urlThree = models.TextField(default='urlThree')
    project_description = models.TextField(default='description')
    project_services = models.ManyToManyField(Service)

    def __str__(self):
        return self.project_title
