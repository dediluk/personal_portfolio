from django.shortcuts import render
from .models import Blog

def all_blogs(request):
    posts = Blog.objects.order_by('-date')
    return render(request, 'blog/home.html', {'posts': posts})
