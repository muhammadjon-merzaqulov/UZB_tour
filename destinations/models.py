from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField


class DestinationCategory(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    slug = models.SlugField(_('Slug'), unique=True)

    class Meta:
        verbose_name = _('Destination Category')
        verbose_name_plural = _('Destination Categories')

    def __str__(self):
        return self.name


class Destination(models.Model):
    name = models.CharField(_('Name'), max_length=200)
    slug = models.SlugField(_('Slug'), unique=True)
    description = RichTextField(_('Description'))
    image = models.ImageField(_('Image'), upload_to='destinations/')
    category = models.ForeignKey(DestinationCategory, on_delete=models.CASCADE, related_name='destinations',
                                 verbose_name=_('Category'))
    is_featured = models.BooleanField(_('Featured'), default=False)
    created_at = models.DateTimeField(_('Created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated at'), auto_now=True)

    class Meta:
        verbose_name = _('Destination')
        verbose_name_plural = _('Destinations')
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('destinations:detail', kwargs={'slug': self.slug})
