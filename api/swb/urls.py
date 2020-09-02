from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('projects/', views.ProjectList.as_view(), name='project_list'),
    path('projects/<int:pk>', views.ProjectDetail.as_view(), name='project_detail'),
    path('services/', views.ServiceList.as_view(), name='service_list'),
    path('services/<int:pk>', views.ServiceDetail.as_view(), name='service_detail'),
    path('members/', views.MemberList.as_view(), name='member_list'),
    path('members/<int:pk>', views.MemberDetail.as_view(), name='member_detail'),
    path('contacts/', views.ContactList.as_view(), name='contact_list'),
    path('contacts/<int:pk>', views.ContactDetail.as_view(), name='contact_detail'),
]
