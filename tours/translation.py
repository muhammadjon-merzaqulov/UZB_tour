from modeltranslation.translator import register, TranslationOptions
from .models import Tour, TourCategory

@register(TourCategory)
class TourCategoryTranslationOptions(TranslationOptions):
    fields = ('name',)

@register(Tour)
class TourTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'highlights',)
