from django.shortcuts import render
from .models import Project


def home(request):
    projects = Project.objects.all()
    number_of_projects = Project.objects.all().count()
    return render(request, 'portfolio/home.html', {'projects': projects, 'number_of_projects': number_of_projects})
