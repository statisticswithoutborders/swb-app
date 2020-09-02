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
    path('volunteers/', views.VolunteerList.as_view(), name='volunteer_list'),
    path('volunteers/<int:pk>', views.VolunteerDetail.as_view(), name='volunteer_detail'),
    path('new_projects/', views.NewProjectList.as_view(), name='new_project_list'),
    path('new_projects/<int:pk>', views.NewProjectDetail.as_view(), name='new_project_detail'),
]
