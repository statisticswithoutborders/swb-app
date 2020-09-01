# Generated by Django 3.1 on 2020-08-31 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('swb', '0009_contact_newproject_volunteer'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='contact_email',
            field=models.EmailField(default='EMAIL', max_length=200),
        ),
        migrations.AddField(
            model_name='contact',
            name='contact_message',
            field=models.TextField(default='MESSAGE'),
        ),
        migrations.AddField(
            model_name='contact',
            name='contact_organization',
            field=models.CharField(default='ORGANIZATION', max_length=100),
        ),
        migrations.AddField(
            model_name='contact',
            name='contact_subject',
            field=models.CharField(default='SUBJECT', max_length=100),
        ),
        migrations.AddField(
            model_name='newproject',
            name='new_project_email',
            field=models.EmailField(default='EMAIL', max_length=200),
        ),
        migrations.AddField(
            model_name='newproject',
            name='new_project_message',
            field=models.TextField(default='MESSAGE'),
        ),
        migrations.AddField(
            model_name='newproject',
            name='new_project_organization',
            field=models.CharField(default='ORGANIZATION', max_length=100),
        ),
        migrations.AddField(
            model_name='newproject',
            name='new_project_subject',
            field=models.CharField(default='SUBJECT', max_length=100),
        ),
        migrations.AddField(
            model_name='volunteer',
            name='volunteer_email',
            field=models.EmailField(default='EMAIL', max_length=200),
        ),
        migrations.AddField(
            model_name='volunteer',
            name='volunteer_message',
            field=models.TextField(default='MESSAGE'),
        ),
        migrations.AddField(
            model_name='volunteer',
            name='volunteer_organization',
            field=models.CharField(default='ORGANIZATION', max_length=100),
        ),
        migrations.AddField(
            model_name='volunteer',
            name='volunteer_subject',
            field=models.CharField(default=' ', max_length=100),
        ),
    ]