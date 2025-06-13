from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.utils.translation import gettext as _
from .models import Tour, TourCategory
from .forms import TourInquiryForm


def tour_list(request):
    categories = TourCategory.objects.all()
    category_slug = request.GET.get('category')

    if category_slug:
        category = get_object_or_404(TourCategory, slug=category_slug)
        tours = Tour.objects.filter(category=category)
    else:
        tours = Tour.objects.all()

    context = {
        'categories': categories,
        'tours': tours,
        'current_category': category_slug,
    }
    return render(request, 'tours/list.html', context)


def tour_detail(request, slug):
    tour = get_object_or_404(Tour, slug=slug)
    form = TourInquiryForm(initial={'tour': tour})

    context = {
        'tour': tour,
        'form': form,
    }
    return render(request, 'tours/detail.html', context)


def tour_inquiry(request, slug):
    tour = get_object_or_404(Tour, slug=slug)

    if request.method == 'POST':
        form = TourInquiryForm(request.POST)
        if form.is_valid():
            inquiry = form.save(commit=False)
            inquiry.tour = tour
            inquiry.save()
            messages.success(request, _('Your inquiry has been submitted successfully. We will contact you soon.'))
            return redirect('tours:detail', slug=slug)
    else:
        form = TourInquiryForm()

    context = {
        'tour': tour,
        'form': form,
    }
    return render(request, 'tours/inquiry.html', context)
