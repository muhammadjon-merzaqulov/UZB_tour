from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField


class TeamMember(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    role = models.CharField(_('Role'), max_length=100)
    bio = RichTextField(_('Bio'))
    image = models.ImageField(_('Image'), upload_to='team/')
    twitter = models.URLField(_('Twitter'), blank=True, null=True)
    linkedin = models.URLField(_('LinkedIn'), blank=True, null=True)
    instagram = models.URLField(_('Instagram'), blank=True, null=True)
    order = models.PositiveIntegerField(_('Order'), default=0)

    class Meta:
        verbose_name = _('Team Member')
        verbose_name_plural = _('Team Members')
        ordering = ['order']

    def __str__(self):
        return self.name


class CompanyHistory(models.Model):
    year = models.PositiveIntegerField(_('Year'))
    title = models.CharField(_('Title'), max_length=200)
    description = RichTextField(_('Description'))

    class Meta:
        verbose_name = _('Company History')
        verbose_name_plural = _('Company History')
        ordering = ['year']

    def __str__(self):
        return f"{self.year} - {self.title}"
