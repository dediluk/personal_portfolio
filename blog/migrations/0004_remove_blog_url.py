# Generated by Django 3.2.4 on 2021-08-03 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_blog'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='url',
        ),
    ]
