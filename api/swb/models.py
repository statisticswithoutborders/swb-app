from django.db import models

# Create your models here.

class Service(models.Model):
    project_service = models.CharField(max_length=200)
    
    def __str__(self):
        return self.project_service

class Project(models.Model):
    project_title = models.CharField(max_length=200)
    project_tag = models.CharField(max_length=100)
    project_location = models.CharField(max_length=100)
    photo_urlOne = models.TextField(default='urlOne')
    photo_urlTwo = models.TextField(default='urlTwo')
    photo_urlThree = models.TextField(default='urlThree')
    project_description = models.TextField(default='description')
    project_services = models.ManyToManyField(Service)
    
    def __str__(self):
        return self.project_title
    
       
        
  