# Generated by Django 3.2 on 2021-06-19 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diarista',
            name='cpf',
            field=models.CharField(max_length=11, unique=True),
        ),
    ]
