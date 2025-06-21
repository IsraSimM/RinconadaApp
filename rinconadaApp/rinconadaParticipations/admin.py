from django.contrib import admin
from .models import Ciudadanos, ParticipationsDate, Participations

@admin.register(Ciudadanos)
class CiudadanosAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'cedula', 'cargo', 'email', 'fecha_registro')
    search_fields = ('nombre', 'apellido', 'cedula', 'curp')
    list_filter = ('cargo',)

@admin.register(ParticipationsDate)
class ParticipationsDateAdmin(admin.ModelAdmin):
    list_display = ('fecha', 'tipo', 'descripcion', 'encargado')
    list_filter = ('tipo', 'fecha')
    search_fields = ('descripcion',)

@admin.register(Participations)
class ParticipationsAdmin(admin.ModelAdmin):
    list_display = ('ciudadano', 'fecha', 'estado', 'creado')
    list_filter = ('estado', 'fecha__tipo')
    search_fields = ('ciudadano__nombre', 'ciudadano__apellido')