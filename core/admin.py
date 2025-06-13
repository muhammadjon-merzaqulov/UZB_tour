from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Admin panel sarlavhasini o'zgartirish
admin.site.site_header = "UzbTour Admin"
admin.site.site_title = "UzbTour Admin Portal"
admin.site.index_title = "UzbTour Boshqaruv Paneli"

# Admin foydalanuvchilarni boshqarish uchun
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active', 'date_joined', 'last_login')
    list_filter = ('is_staff', 'is_superuser', 'is_active')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    ordering = ('-date_joined',)

# Standart UserAdmin o'rniga CustomUserAdmin ishlatish
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
