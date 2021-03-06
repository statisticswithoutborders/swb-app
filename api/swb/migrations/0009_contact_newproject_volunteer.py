# Generated by Django 3.1 on 2020-08-31 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('swb', '0008_member'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact_name', models.CharField(default='NAME', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='NewProject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('new_project_name', models.CharField(default='NAME', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('volunteer_name', models.CharField(default='NAME', max_length=100)),
            ],
        ),
    ]
