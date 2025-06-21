from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'ciudadanos', views.CiudadanoViews, 'ciudadano')
router.register(r'participations-date', views.ParticipationsDateViews, 'participations-date')
router.register(r'participations', views.ParticipationsViews, 'participation')

urlpatterns = [
    path('', include(router.urls)),
]