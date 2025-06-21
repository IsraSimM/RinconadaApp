import os
import django
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

# Configurar Django si es script aislado
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rinconadaApp.settings")
django.setup()

context = {
    "nombre": "Israel",
    "username": "israel.simon",
    "password": "contraseña123"
}

html_content = render_to_string("emails/nueva_cuenta.html", context)
text_content = f"Tu usuario: {context['username']}\nTu contraseña: {context['password']}"

msg = EmailMultiAlternatives(
    subject="Prueba de envío de correo",
    body=text_content,
    from_email=None,  # usa DEFAULT_FROM_EMAIL
    to=["israsimm@gmail.com"]
)

msg.attach_alternative(html_content, "text/html")

try:
    msg.send()
    print("✅ Correo enviado con éxito.")
except Exception as e:
    print(f"❌ Error al enviar: {e}")
