RinconadaApp
RinconadaApp es una aplicación web para gestionar participaciones comunitarias, como faenas, cooperaciones y eventos. El backend está desarrollado con Django 5.0.6 y Django REST Framework, utilizando una base de datos SQLite. Proporciona una API REST para registrar ciudadanos, eventos, asistencias, y generar reportes/estadísticas.
Requisitos

Python 3.8+
Node.js (para el frontend, cuando se implemente)
Dependencias de Python:
django
djangorestframework
django-cors-headers
python-dotenv
djangorestframework-simplejwt
pillow



Instalación

Clonar el repositorio:
git clone <URL_DEL_REPOSITORIO>
cd RinconadaApp


Crear y activar un entorno virtual:
python -m venv evr
source evr/bin/activate  # En Windows: evr\Scripts\activate


Instalar dependencias:
pip install django djangorestframework django-cors-headers python-dotenv djangorestframework-simplejwt pillow


Configurar variables de entorno:

Crea un archivo .env en la raíz del proyecto:DJANGO_SECRET_KEY=tu_clave_secreta_aqui
DJANGO_DEBUG=True




Crear carpeta para fotos:
mkdir -p media/evidencias


Aplicar migraciones:
python manage.py makemigrations
python manage.py migrate


Crear un superusuario (para el panel de administración):
python manage.py createsuperuser


Ejecutar el servidor:
python manage.py runserver


Panel de administración: http://localhost:8000/admin/
Documentación de la API: http://localhost:8000/api/docs/



Modelos
Ciudadanos

Representa a los ciudadanos de la comunidad.
Campos:
user: Vinculación con un usuario de Django para autenticación (opcional).
nombre, apellido: Nombre y apellido del ciudadano.
cedula: Identificador único de 10 dígitos.
curp: CURP (18 caracteres, opcional).
telefono: Número de teléfono (10 dígitos, opcional).
email: Correo electrónico (único, opcional).
cargo: Rol en la comunidad (Delegado, Ciudadano, Comunero, Vishcal, Tesorero).
fecha_registro: Fecha de creación del registro.


Los ciudadanos con cargo="dlg" (Delegado) se convierten automáticamente en usuarios autenticables.

ParticipationsDate

Registra eventos o actividades comunitarias (faenas, participaciones, cooperaciones).
Campos:
fecha: Fecha del evento.
encargado: Ciudadano con cargo "Delegado" responsable del evento.
tipo: Tipo de evento (Faenas, Participaciones, Cooperaciones).
descripcion: Descripción detallada del evento.



Participations

Registra la asistencia de ciudadanos a eventos.
Campos:
ciudadano: Ciudadano que participa.
fecha: Evento asociado (de ParticipationsDate).
estado: Estado de la asistencia (Confirmada, Pendiente, Ausente).
comentario: Notas adicionales sobre la participación.
evidencia: Foto o evidencia del evento (opcional).
creado: Fecha de registro de la asistencia.



Endpoints de la API
Todos los endpoints requieren autenticación JWT. Obtén un token con:
curl -X POST http://localhost:8000/api/token/ -d "username=admin&password=tu_contraseña"

Ciudadanos

GET /api/ciudadanos/: Lista todos los ciudadanos.
POST /api/ciudadanos/: Crea un ciudadano.
GET /api/ciudadanos/<id>/: Detalle de un ciudadano.
PUT /api/ciudadanos/<id>/: Actualiza un ciudadano.
DELETE /api/ciudadanos/<id>/: Elimina un ciudadano.

ParticipationsDate

GET /api/participations-date/: Lista todos los eventos.
POST /api/participations-date/: Crea un evento.
GET /api/participations-date/<id>/: Detalle de un evento.
PUT /api/participations-date/<id>/: Actualiza un evento.
DELETE /api/participations-date/<id>/: Elimina un evento.

Participations

GET /api/participations/: Lista todas las asistencias.
POST /api/participations/: Registra una asistencia (puede incluir una foto en evidencia).
GET /api/participations/<id>/: Detalle de una asistencia.
PUT /api/participations/<id>/: Actualiza una asistencia.
DELETE /api/participations/<id>/: Elimina una asistencia.

Reportes

GET /api/participations/estadisticas/: Conteo de participaciones por ciudadano.
GET /api/participations/reporte_por_tipo/: Conteo de eventos por tipo.
GET /api/participations/sin_participaciones/: Ciudadanos que no han participado.
GET /api/participations/por_mes/: Participaciones agrupadas por mes y tipo.

Notas

En producción, configura DEBUG=False y usa una base de datos como PostgreSQL.
Cambia la contraseña por defecto (default_password) para los usuarios creados automáticamente.
Asegúrate de que el frontend (React con Vite) esté configurado para usar http://localhost:8000/api/ como base de la API.

Contribuciones

Crea una rama para nuevas funcionalidades:git checkout -b feature/nueva-funcionalidad


Realiza cambios y haz commit:git add .
git commit -m "Descripción de los cambios"


Sube los cambios y crea un pull request:git push origin feature/nueva-funcionalidad



