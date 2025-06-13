from modeltranslation.translator import register, TranslationOptions
from .models import GalleryCategory, GalleryImage

@register(GalleryCategory)
class GalleryCategoryTranslationOptions(TranslationOptions):
    fields = ('name',)

@register(GalleryImage)
class GalleryImageTranslationOptions(TranslationOptions):
    fields = ('title',)
