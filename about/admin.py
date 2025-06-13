from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TranslationAdmin
from .models import TeamMember, CompanyHistory


@admin.register(TeamMember)
class TeamMemberAdmin(TranslationAdmin):
    list_display = ('name', 'role', 'display_image', 'order')
    list_filter = ('role',)
    search_fields = ('name', 'role', 'bio')
    list_editable = ('order',)

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


@admin.register(CompanyHistory)
class CompanyHistoryAdmin(TranslationAdmin):
    list_display = ('year', 'title')
    list_filter = ('year',)
    search_fields = ('year', 'title', 'description')
    ordering = ('year',)

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
