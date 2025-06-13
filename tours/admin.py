from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TranslationAdmin
from .models import Tour, TourCategory, TourInquiry


@admin.register(TourCategory)
class TourCategoryAdmin(TranslationAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)

    # TranslationAdmin uchun sozlamalar
    group_fieldsets = True

    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


@admin.register(Tour)
class TourAdmin(TranslationAdmin):
    list_display = ('name', 'category', 'price', 'duration', 'display_image', 'created_at')
    list_filter = ('category', 'duration')
    search_fields = ('name', 'description', 'highlights')
    prepopulated_fields = {'slug': ('name',)}
    date_hierarchy = 'created_at'

    # Rasm ko'rsatish uchun
    def display_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" />', obj.image.url)
        return "Rasm yo'q"

    display_image.short_description = 'Rasm'

    # TranslationAdmin uchun sozlamalar
    group_fieldsets = True

    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


@admin.register(TourInquiry)
class TourInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'tour', 'created_at')
    list_filter = ('tour', 'created_at')
    search_fields = ('name', 'email', 'phone', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
