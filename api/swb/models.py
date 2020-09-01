from django.db import models

# Create your models here.


class Service(models.Model):
    service_name = models.CharField(max_length=100, unique=True, default=" ")

    def __str__(self):
        return self.service_name


class Project(models.Model):
    project_title = models.CharField(max_length=200, unique=True)
    project_tag = models.CharField(max_length=100, default=" ")
    project_location = models.CharField(max_length=100, default=" ")
    photo_urlOne = models.TextField(default='urlOne')
    photo_urlTwo = models.TextField(default='urlTwo')
    photo_urlThree = models.TextField(default='urlThree')
    project_description = models.TextField(default='description')
    project_services = models.ManyToManyField(Service)

    def __str__(self):
        return self.project_title


class Member(models.Model):
    member_name = models.CharField(max_length=100, unique=True, default=" ")
    member_picture_url = models.TextField(default=" ")
    member_role = models.CharField(max_length=100, default=" ")
    member_about = models.TextField(default=" ")

    def __str__(self):
        return self.member_name


class Contact(models.Model):
<<<<<<< HEAD
    contact_name = models.CharField(max_length=100, default=" ")
    contact_email = models.EmailField(max_length=200, default=" ")
    contact_organization: models.CharField(max_length=100, default=" ")
    contact_subject = models.CharField(max_length=100, default=" ")
    contact_message = models.TextField(default=" ")
=======
    contact_name = models.CharField(max_length=100, default="NAME")
    contact_email = models.EmailField(max_length=200, default="EMAIL")
    contact_organization = models.CharField(
        max_length=100, default="ORGANIZATION")
    contact_subject = models.CharField(max_length=100, default="SUBJECT")
    contact_message = models.TextField(default="MESSAGE")
>>>>>>> 1f9feb294e0e4c1a69638252775a55458fe1140d

    def __str__(self):
        return self.contact_name


class Volunteer(models.Model):
    volunteer_name = models.CharField(max_length=100, default="NAME")
    volunteer_email = models.EmailField(max_length=200, default="EMAIL")
    volunteer_organization = models.CharField(
        max_length=100, default="ORGANIZATION")
    volunteer_subject = models.CharField(max_length=100, default="SUBJECT")
    volunteer_message = models.TextField(default="MESSAGE")

    def __str__(self):
        return self.volunteer_name


class NewProject(models.Model):
    new_project_name = models.CharField(max_length=100, default=" ")
    new_project_email: models.CharField(max_length=200, default=" ")
    new_project_organization: models.CharField(max_length=100, default=" ")
    new_project_subject = models.CharField(max_length=100, default=" ")
    new_project_message = models.TextField(default=" ")

    def __str__(self):
        return self.new_project_name
    
class Blog(models.Model):
    blog_title = models.CharField(max_length=200, default=" ")
    blog_date = models.DateField(auto_now=True)
    blog_body = models.TextField(default="Enter text here")
    
    def __str__(self):
        return self.blog_title
