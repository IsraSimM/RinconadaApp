from rest_framework import serializers
from .models import Ciudadanos, ParticipationsDate, Participations
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']  # Excluir password

class CiudadanosSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Ciudadanos
        fields = ['id', 'user', 'nombre', 'apellido', 'cedula', 'curp', 'telefono', 'email', 'cargo', 'fecha_registro']

class ParticipationsDateSerializer(serializers.ModelSerializer):
    encargado = CiudadanosSerializer(read_only=True)

    class Meta:
        model = ParticipationsDate
        fields = ['id', 'fecha', 'encargado', 'tipo', 'descripcion']

class ParticipationSerializer(serializers.ModelSerializer):
    ciudadano = CiudadanosSerializer(read_only=True)
    fecha = ParticipationsDateSerializer(read_only=True)

    class Meta:
        model = Participations
        fields = ['id', 'ciudadano', 'fecha', 'estado', 'comentario', 'evidencia', 'creado']