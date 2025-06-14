from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns
from django.views.i18n import set_language

# Admin panel sarlavhasini o'zgartirish
admin.site.site_header = "UzbTour Admin"
admin.site.site_title = "UzbTour Admin Portal"
admin.site.index_title = "UzbTour Boshqaruv Paneli"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('set-language/', set_language, name='set_language')
]

# Add i18n patterns for translated URLs
urlpatterns += i18n_patterns(
    path('', include('core.urls')),
    path('destinations/', include('destinations.urls')),
    path('tours/', include('tours.urls')),
    path('gallery/', include('gallery.urls')),
    path('about/', include('about.urls')),
    path('contact/', include('contact.urls')),
    prefix_default_language=False,
)

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
