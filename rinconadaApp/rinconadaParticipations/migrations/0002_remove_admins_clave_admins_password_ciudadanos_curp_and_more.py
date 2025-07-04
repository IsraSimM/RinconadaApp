# Generated by Django 5.0.6 on 2024-06-08 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rinconadaParticipations', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='admins',
            name='clave',
        ),
        migrations.AddField(
            model_name='admins',
            name='password',
            field=models.CharField(default='Rinconada', max_length=128),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ciudadanos',
            name='curp',
            field=models.CharField(blank=True, max_length=18),
        ),
        migrations.AlterField(
            model_name='ciudadanos',
            name='cargo',
            field=models.CharField(choices=[('dlg', 'Delegado'), ('cdd', 'Ciudadano'), ('cmn', 'Comunero'), ('vsh', 'Vishcal'), ('tesorero', 'bomberos')], default='ciudadano', max_length=50),
        ),
        migrations.AlterField(
            model_name='ciudadanos',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='ciudadanos',
            name='telefono',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='participationsdate',
            name='tipo',
            field=models.CharField(choices=[('faenas', 'participaciones, coperaciones')], max_length=50),
        ),
    ]
