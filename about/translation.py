from modeltranslation.translator import register, TranslationOptions
from .models import TeamMember, CompanyHistory

@register(TeamMember)
class TeamMemberTranslationOptions(TranslationOptions):
    fields = ('name', 'role', 'bio',)

@register(CompanyHistory)
class CompanyHistoryTranslationOptions(TranslationOptions):
    fields = ('title', 'description',)
