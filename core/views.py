from django.shortcuts import render, redirect
from django.utils import translation
from django.urls import translate_url
from django.conf import settings
from destinations.models import Destination
from tours.models import Tour
from django.utils.translation import gettext as _
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import user_passes_test
from django.contrib import messages


def home(request):
    featured_destinations = Destination.objects.filter(is_featured=True)[:4]
    testimonials = [
        {
            'name': _('Sarah Johnson'),
            'country': _('United States'),
            'text': _(
                'Amazing experience in Uzbekistan! The tour was well organized, and the guides were knowledgeable and friendly.'),
        },
        {
            'name': _('Michael Chen'),
            'country': _('Australia'),
            'text': _(
                'The food in Uzbekistan was a highlight for me. The plov, samsa, and shashlik were all delicious!'),
        },
        {
            'name': _('Elena Petrova'),
            'country': _('Russia'),
            'text': _('Beautiful architecture and rich history. I especially loved Samarkand and Bukhara.'),
        },
    ]

    context = {
        'featured_destinations': featured_destinations,
        'testimonials': testimonials,
    }
    return render(request, 'core/home.html', context)


def set_language(request, language):
    if language in [lang[0] for lang in settings.LANGUAGES]:
        translation.activate(language)
        response = redirect(request.META.get('HTTP_REFERER', '/'))
        response.set_cookie(settings.LANGUAGE_COOKIE_NAME, language)
        return response
    return redirect('core:home')


# Admin foydalanuvchilarni boshqarish uchun
@user_passes_test(lambda u: u.is_superuser)
def admin_user_management(request):
    users = User.objects.all().order_by('-date_joined')

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_staff = True  # Admin panelga kirish huquqi
            user.save()
            messages.success(request, f"Foydalanuvchi {user.username} muvaffaqiyatli yaratildi.")
            return redirect('core:admin_user_management')
    else:
        form = UserCreationForm()

    context = {
        'users': users,
        'form': form,
    }
    return render(request, 'admin/user_management.html', context)
