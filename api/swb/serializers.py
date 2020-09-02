from rest_framework import serializers
from .models import Project, Service, Member


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
        fields = ('id', 'member_name', 'member_picture_url', 'member_role', 'member_about')
