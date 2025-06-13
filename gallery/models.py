from django.db import models
from django.utils.translation import gettext_lazy as _


class GalleryCategory(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    slug = models.SlugField(_('Slug'), unique=True)

    class Meta:
        verbose_name = _('Gallery Category')
        verbose_name_plural = _('Gallery Categories')

    def __str__(self):
        return self.name


class GalleryImage(models.Model):
    title = models.CharField(_('Title'), max_length=200)
    image = models.ImageField(_('Image'), upload_to='gallery/')
    category = models.ForeignKey(GalleryCategory, on_delete=models.CASCADE, related_name='images',
                                 verbose_name=_('Category'))
    created_at = models.DateTimeField(_('Created at'), auto_now_add=True)

    class Meta:
        verbose_name = _('Gallery Image')
        verbose_name_plural = _('Gallery Images')
        ordering = ['-created_at']

    def __str__(self):
        return self.title
