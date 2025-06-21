from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializer import CiudadanosSerializer, ParticipationsDateSerializer, ParticipationSerializer
from .models import Ciudadanos, ParticipationsDate, Participations
from django.db.models import Count, F
from django.db.models.functions import TruncMonth

class CiudadanoViews(viewsets.ModelViewSet):
    queryset = Ciudadanos.objects.all()
    serializer_class = CiudadanosSerializer
    permission_classes = [IsAuthenticated]

class ParticipationsDateViews(viewsets.ModelViewSet):
    queryset = ParticipationsDate.objects.select_related('encargado').all()
    serializer_class = ParticipationsDateSerializer
    permission_classes = [IsAuthenticated]

class ParticipationsViews(viewsets.ModelViewSet):
    queryset = Participations.objects.select_related('ciudadano', 'fecha__encargado').all()
    serializer_class = ParticipationSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=['get'])
    def estadisticas(self, request):
        """Reporte: Conteo de participaciones por ciudadano"""
        stats = Participations.objects.values(
            'ciudadano__nombre',
            'ciudadano__apellido',
            'ciudadano__cedula'
        ).annotate(total=Count('id')).order_by('-total')
        return Response(stats)

    @action(detail=False, methods=['get'])
    def reporte_por_tipo(self, request):
        """Reporte: Conteo de participaciones por tipo de evento"""
        report = ParticipationsDate.objects.values('tipo').annotate(total=Count('participations')).order_by('tipo')
        return Response(report)

    @action(detail=False, methods=['get'])
    def sin_participaciones(self, request):
        """Reporte: Ciudadanos que no han participado"""
        ciudadanos = Ciudadanos.objects.exclude(participations__isnull=False)
        serializer = CiudadanosSerializer(ciudadanos, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def por_mes(self, request):
        """Reporte: Participaciones agrupadas por mes y año"""
        stats = Participations.objects.annotate(
            mes=TruncMonth('fecha__fecha')
        ).values(
            'mes',
            'fecha__tipo'
        ).annotate(total=Count('id')).order_by('mes', 'fecha__tipo')
        return Response([
            {
                'mes': item['mes'].strftime('%Y-%m'),
                'tipo': item['fecha__tipo'],
                'total': item['total']
            } for item in stats
        ])