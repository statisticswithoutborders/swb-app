from rest_framework import serializers
from .models import Project, Service


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    project_services = serializers.HyperlinkedRelatedField(
        view_name='service_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Project
        fields = ('id', 'project_title', 'project_tag', 'project_location',
                  'photo_urlOne', 'photo_urlTwo', 'photo_urlThree', 'project_services',)


class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    # project = serializers.PrimaryKeyRelatedField(
    #     queryset=Project.objects.all())

    class Meta:
        model = Service
        fields = ('id', 'service_name',)
