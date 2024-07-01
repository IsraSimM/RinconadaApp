from django.contrib import admin

# Importamos los models aqui.
from .models import Ciudadanos, Admins, ParticipationsDate, Participations

# Registramos los models aqui.
admin.site.register(Ciudadanos)
admin.site.register(Admins)
admin.site.register(ParticipationsDate)
admin.site.register(Participations)