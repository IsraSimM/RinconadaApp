from rest_framework import serializers
from .models import *

class ParticipationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participations
        fields = '__all__'

class CiudadanosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudadanos
        fields = '__all__'

class AdminsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admins
        fields = '__all__'

class ParticipationsDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParticipationsDate
        fields = '__all__'
