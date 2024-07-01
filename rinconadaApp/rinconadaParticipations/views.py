from rest_framework import viewsets
from .serializer import *
from .models import *

# Create your views here.
class ciudadanoViews(viewsets.ModelViewSet):
    queryset = Ciudadanos.objects.all()
    serializer_class = CiudadanosSerializer

class adminViews(viewsets.ModelViewSet):
    queryset = Admins.objects.all()
    serializer_class = AdminsSerializer

class participationsDateViews(viewsets.ModelViewSet):
    queryset = ParticipationsDate.objects.all()
    serializer_class = ParticipationsDateSerializer

class participationsViews(viewsets.ModelViewSet):
    queryset = Participations.objects.all()
    serializer_class = ParticipationSerializer
