from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.home, name='home'),
    path('set-language/<str:language>/', views.set_language, name='set_language'),
    path('admin/user-management/', views.admin_user_management, name='admin_user_management'),
]
