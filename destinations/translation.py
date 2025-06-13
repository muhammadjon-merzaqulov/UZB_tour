from modeltranslation.translator import register, TranslationOptions
from .models import Destination, DestinationCategory

@register(DestinationCategory)
class DestinationCategoryTranslationOptions(TranslationOptions):
    fields = ('name',)

@register(Destination)
class DestinationTranslationOptions(TranslationOptions):
    fields = ('name', 'description',)
