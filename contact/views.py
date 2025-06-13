from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils.translation import gettext as _
from .models import FAQ
from .forms import ContactForm


def contact(request):
    faqs = FAQ.objects.all()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, _('Your message has been sent successfully. We will contact you soon.'))
            return redirect('contact:contact')
    else:
        form = ContactForm()

    context = {
        'form': form,
        'faqs': faqs,
    }
    return render(request, 'contact/contact.html', context)
