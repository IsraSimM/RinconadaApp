from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator, FileExtensionValidator
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.exceptions import ValidationError
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.db.models.signals import post_save
from django.dispatch import receiver
import secrets
import string

def validate_image_size(value):
    max_size = 5 * 1024 * 1024  # 5MB en bytes
    if value.size > max_size:
        raise ValidationError(f'El archivo no puede exceder los 5MB. Tamaño actual: {value.size / (1024 * 1024):.2f}MB.')

class Ciudadanos(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=75)
    cedula = models.CharField(
        max_length=10,
        unique=True,
        validators=[RegexValidator(r'^\d{10}$', 'La cédula debe tener 10 dígitos.')]
    )
    curp = models.CharField(
        max_length=18,
        unique=True,
        blank=True,
        validators=[RegexValidator(r'^[A-Z0-9]{18}$', 'El CURP debe tener 18 caracteres alfanuméricos.')]
    )
    telefono = models.CharField(
        max_length=10,
        blank=True,
        validators=[RegexValidator(r'^\d{10}$', 'El teléfono debe tener 10 dígitos.')]
    )
    email = models.EmailField(unique=True, blank=True)
    cargo = models.CharField(
        max_length=50,
        default="cdd",
        choices=[
            ("dlg", "Presidente"),
            ("cdd", "Ciudadano"),
            ("cmn", "Comunero"),
            ("vsh", "Vishcal"),
            ("tes", "Tesorero"),
            ("bmb", "Bombero"),
        ]
    )
    fecha_registro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


@receiver(post_save, sender=Ciudadanos)
def create_admin_user(sender, instance, created, **kwargs):
    if instance.cargo == "dlg" and not instance.user:
        username = f"{instance.nombre.lower()}.{instance.apellido.lower()}".replace(" ", "_")
        email = instance.email or f"{username}@gmail.com"
        password = ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(12))

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        instance.user = user
        instance.save()

        # Preparar correo HTML
        context = {
            'nombre': instance.nombre,
            'username': username,
            'password': password
        }

        subject = "Tu cuenta en la plataforma ha sido creada"
        from_email = None
        to = [email]
        text_content = f"Tu usuario: {username}\nTu contraseña: {password}"
        html_content = render_to_string("emails/nueva_cuenta.html", context)

        msg = EmailMultiAlternatives(subject, text_content, from_email, to)
        msg.attach_alternative(html_content, "text/html")

        try:
            msg.send()
        except Exception as e:
            print(f"Error al enviar correo a {email}: {e}")

class ParticipationsDate(models.Model):
    fecha = models.DateField(db_index=True)
    encargado = models.ForeignKey('Ciudadanos', on_delete=models.CASCADE, null=True, default=None, limit_choices_to={'cargo': 'dlg'})
    tipo = models.CharField(
        max_length=50,
        default="f",
        choices=[
            ("f", "Faenas"),
            ("cmn", "Comunero"),
            ("c", "Cooperativo"),
        ]
    )
    descripcion = models.TextField()

    def __str__(self):
        return f"{self.descripcion} ({self.fecha})"

class Participations(models.Model):
    ciudadano = models.ForeignKey(Ciudadanos, on_delete=models.CASCADE, db_index=True)
    fecha = models.ForeignKey(ParticipationsDate, on_delete=models.CASCADE, db_index=True)
    estado = models.CharField(
        max_length=20,
        default="confirmada",
        choices=[
            ("confirmada", "Confirmada"),
            ("pendiente", "Pendiente"),
            ("ausente", "Ausente"),
        ]
    )
    comentario = models.TextField(blank=True)
    evidencia = models.ImageField(
        upload_to='evidencias/',
        blank=True,
        null=True,
        validators=[
            FileExtensionValidator(['jpg', 'jpeg', 'png']),
            validate_image_size
        ]
    )
    creado = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('ciudadano', 'fecha')

    def __str__(self):
        return f"{self.ciudadano.nombre} - {self.fecha.descripcion} ({self.estado})"