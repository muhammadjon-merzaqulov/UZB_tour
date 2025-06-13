from django.shortcuts import render, get_object_or_404
from .models import Destination, DestinationCategory


def destination_list(request):
    categories = DestinationCategory.objects.all()
    category_slug = request.GET.get('category')

    if category_slug:
        category = get_object_or_404(DestinationCategory, slug=category_slug)
        destinations = Destination.objects.filter(category=category)
    else:
        destinations = Destination.objects.all()

    context = {
        'categories': categories,
        'destinations': destinations,
        'current_category': category_slug,
    }
    return render(request, 'destinations/list.html', context)


def destination_detail(request, slug):
    destination = get_object_or_404(Destination, slug=slug)
    context = {
        'destination': destination,
    }
    return render(request, 'destinations/detail.html', context)