# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-31 15:53
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myauthapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofileinfo',
            old_name='portfolio_site',
            new_name='your_site',
        ),
    ]
