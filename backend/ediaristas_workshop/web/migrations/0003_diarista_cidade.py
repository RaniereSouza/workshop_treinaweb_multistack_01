# Generated by Django 3.2 on 2021-06-20 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_alter_diarista_cpf'),
    ]

    operations = [
        migrations.AddField(
            model_name='diarista',
            name='cidade',
            field=models.CharField(blank=True, max_length=60),
        ),
    ]
