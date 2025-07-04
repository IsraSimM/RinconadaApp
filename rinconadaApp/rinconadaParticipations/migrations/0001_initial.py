# Generated by Django 5.0.6 on 2024-05-22 20:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ciudadanos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('cedula', models.CharField(max_length=10)),
                ('telefono', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254)),
                ('cargo', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ParticipationsDate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('tipo', models.CharField(choices=[('Faenas y Participaciones', 'Faenas y Participaciones')], max_length=50)),
                ('descripcion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Admins',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clave', models.CharField(max_length=50)),
                ('ciudadano', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rinconadaParticipations.ciudadanos')),
            ],
        ),
        migrations.CreateModel(
            name='Participations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ciudadano', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rinconadaParticipations.ciudadanos')),
                ('fecha', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rinconadaParticipations.participationsdate')),
            ],
        ),
    ]
