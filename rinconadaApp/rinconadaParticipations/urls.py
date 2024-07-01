from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from rinconadaParticipations import views

# Creas los routers
routerAdmins = routers.DefaultRouter()
routerParticipations = routers.DefaultRouter()
routerCiudadanos = routers.DefaultRouter()
routerParticipationsDate = routers.DefaultRouter()

# Registra tus vistas con los routers
routerAdmins.register(r'admins', views.adminViews, 'admin')
routerParticipations.register(r'participations', views.participationsViews, 'participation')
routerCiudadanos.register(r'ciudadanos', views.ciudadanoViews, 'ciudadano')
routerParticipationsDate.register(r'participationsDate', views.participationsDateViews, 'participationsDate')

# Define tus urlpatterns
urlpatterns = [
    path('api/rent4crud/', include(routerAdmins.urls)),
    path('api/rent4crud/', include(routerParticipations.urls)),
    path('api/rent4crud/', include(routerCiudadanos.urls)),
    path('api/rent4crud/', include(routerParticipationsDate.urls)),
    path('docs/', include_docs_urls(title='Rinconada API')),
    # Aquí ordenarás la url de las fotos
]
