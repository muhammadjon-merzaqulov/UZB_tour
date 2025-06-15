from django.db import models
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField


class ContactMessage(models.Model):
    name = models.CharField(_('Full Name'), max_length=100)
    email = models.EmailField(_('Email'))
    subject = models.CharField(_('Subject'), max_length=200)
    message = models.TextField(_('Message'))
    created_at = models.DateTimeField(_('Created at'), auto_now_add=True)

    class Meta:
        verbose_name = _('Contact Message')
        verbose_name_plural = _('Contact Messages')
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"


class FAQ(models.Model):
    question = models.CharField(_('Question'), max_length=200)
    answer = RichTextField(_('Answer'))
    order = models.PositiveIntegerField(_('Order'), default=0)

    class Meta:
        verbose_name = _('FAQ')
        verbose_name_plural = _('FAQs')
        ordering = ['order']

    def __str__(self):
        return self.question

