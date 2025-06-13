from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField


class TourCategory(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    slug = models.SlugField(_('Slug'), unique=True)

    class Meta:
        verbose_name = _('Tour Category')
        verbose_name_plural = _('Tour Categories')

    def __str__(self):
        return self.name


class Tour(models.Model):
    name = models.CharField(_('Name'), max_length=200)
    slug = models.SlugField(_('Slug'), unique=True)
    description = RichTextField(_('Description'))
    price = models.DecimalField(_('Price'), max_digits=10, decimal_places=2)
    duration = models.PositiveIntegerField(_('Duration (days)'))
    image = models.ImageField(_('Image'), upload_to='tours/')
    category = models.ForeignKey(TourCategory, on_delete=models.CASCADE, related_name='tours',
                                 verbose_name=_('Category'))
    highlights = RichTextField(_('Highlights'))
    created_at = models.DateTimeField(_('Created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('Updated at'), auto_now=True)

    class Meta:
        verbose_name = _('Tour')
        verbose_name_plural = _('Tours')
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('tours:detail', kwargs={'slug': self.slug})


class TourInquiry(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='inquiries', verbose_name=_('Tour'))
    name = models.CharField(_('Full Name'), max_length=100)
    email = models.EmailField(_('Email'))
    phone = models.CharField(_('Phone'), max_length=20)
    message = models.TextField(_('Message'))
    created_at = models.DateTimeField(_('Created at'), auto_now_add=True)

    class Meta:
        verbose_name = _('Tour Inquiry')
        verbose_name_plural = _('Tour Inquiries')
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.tour.name}"
