from django.shortcuts import render
from .models import TeamMember, CompanyHistory
from django.utils.translation import gettext as _


def about(request):
    team_members = TeamMember.objects.all()
    history = CompanyHistory.objects.all()

    mission = {
        'title': _('Our Mission'),
        'description': _(
            'To provide unforgettable travel experiences in Uzbekistan while promoting sustainable tourism and supporting local communities.')
    }

    vision = {
        'title': _('Our Vision'),
        'description': _(
            'To become the leading tourism company in Uzbekistan, known for exceptional service and authentic cultural experiences.')
    }

    context = {
        'team_members': team_members,
        'history': history,
        'mission': mission,
        'vision': vision,
    }
    return render(request, 'about/about.html', context)
