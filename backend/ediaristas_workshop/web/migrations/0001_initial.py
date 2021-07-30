# Generated by Django 3.2 on 2021-06-16 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Diarista',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cpf', models.CharField(max_length=12, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('nome_completo', models.CharField(max_length=100)),
                ('telefone', models.CharField(max_length=11)),
                ('logradouro', models.CharField(max_length=60)),
                ('numero', models.IntegerField()),
                ('bairro', models.CharField(max_length=30)),
                ('complemento', models.CharField(blank=True, max_length=100)),
                ('cep', models.CharField(max_length=8)),
                ('estado', models.CharField(max_length=2)),
                ('codigo_ibge', models.IntegerField()),
                ('foto_usuario', models.ImageField(upload_to='')),
            ],
        ),
    ]
