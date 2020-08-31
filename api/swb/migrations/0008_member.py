# Generated by Django 3.1 on 2020-08-31 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('swb', '0007_delete_member'),
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_name', models.CharField(default=' ', max_length=100, unique=True)),
                ('member_picture_url', models.TextField(default=' ')),
                ('member_role', models.CharField(default=' ', max_length=100)),
                ('member_about', models.TextField(default=' ')),
            ],
        ),
    ]
