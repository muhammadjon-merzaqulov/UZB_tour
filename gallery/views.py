from django.shortcuts import render
from .models import GalleryImage, GalleryCategory


def gallery(request):
    categories = GalleryCategory.objects.all()
    category_slug = request.GET.get('category')

    if category_slug:
        category = GalleryCategory.objects.get(slug=category_slug)
        images = GalleryImage.objects.filter(category=category)
    else:
        images = GalleryImage.objects.all()

    context = {
        'categories': categories,
        'images': images,
        'current_category': category_slug,
    }
    return render(request, 'gallery/gallery.html', context)
