from rest_framework import serializers
from .models import Project, Service, Member, Contact, Volunteer, NewProject, Blog


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    project_services = serializers.HyperlinkedRelatedField(
        view_name='service_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Project
        fields = ('id', 'project_title', 'project_location',
                  'photo_urlOne', 'photo_urlTwo', 'photo_urlThree', 'project_services',)


class ServiceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Service
        fields = ('id', 'service_name',)


class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Member
        fields = ('id', 'member_name', 'member_picture_url',
                  'member_role', 'member_about')


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = ('id', 'contact_name', 'contact_email',
                  'contact_organization', 'contact_subject', 'contact_message')


class VolunteerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Volunteer
        fields = ('id', 'volunteer_name', 'volunteer_email',
                  'volunteer_organization', 'volunteer_subject', 'volunteer_message')


class NewProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = NewProject
        fields = ('id', 'new_project_name', 'new_project_email',
                  'new_project_organization', 'new_project_subject', 'new_project_message')


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ('id', 'blog_title', 'blog_date',
                  'blog_body')
