from django.db import models
from django.contrib.auth.hashers import make_password, check_password


#Los modelos son las estrucutras de DJAGNO que se encargan de generar las tablas en la base de datos, en este caso se crean los modelos de ciudadanos, admins, participationsDate y participations
# Creamos nuestro modelo ciudadanos, que lleva los datos basicos del ciudadano, ademas su cargo en la comunidad
# Las clases, son un contructo de variables que son llamadas atributos y que al complementar nuestra clase la convierten en un objeto
class Ciudadanos(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    cedula = models.CharField(max_length=10)
    curp = models.CharField(max_length=18, blank=True)
    telefono = models.CharField(max_length=10, blank=True)
    email = models.EmailField(blank=True)
    cargo = models.CharField(max_length=50, default="cdd", choices=[("dlg","Delegado"),("cdd", "Ciudadano"),("cmn", "Comunero"),("vsh", "Vishcal"),("tesorero", "bomberos")])
    #Aqui retornamos el valor a mostrar en las vistas del panel de Django
    def __str__(self):
        return self.nombre
    
# Creamos el model de admins en el que se incluiran en automatico los ciudadanos del model anterior que tengan registro con un cargo de "delegado" asi como una clave de acceso que sera modificada y creada por el desarrollador
class Admins(models.Model):
    ciudadano = models.ForeignKey(Ciudadanos, on_delete=models.CASCADE)
    password = models.CharField(max_length=128) # Almacena la contraseña hasheada

    def set_password(self, raw_password):
        self.password = make_password(raw_password)  # Hashea la contraseña antes de almacenarla

    def compare_password(self, raw_password):
        return check_password(raw_password, self.password)  # Comprueba si la contraseña es correcta

    def save(self, *args, **kwargs):
        if not self.pk:
            # Si es un nuevo objeto, hashea la contraseña antes de guardarla
            self.set_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.ciudadano.nombre

# creamos el model de participationsDate en el que se registra la fecha en la que se hace el registro, el tipo de participacion que debe usar un choice que incluya("Faenas y Participaciones"), y una descripcion de la participacion
class ParticipationsDate(models.Model):
    fecha = models.DateField()
    encargado = models.ForeignKey(Admins, default=1, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50, default="f", choices=[("f", "Faenas"), ("p", "Participaciones"), ("c", "Coperaciones")])
    descripcion = models.CharField(max_length=100)
    def __str__(self):
        return self.descripcion

# Creamos el model de participations en el que se registran las participaciones de los ciudadanos, se incluye el ciudadano que participa, la fecha en la que participa
class Participations(models.Model):
    ciudadano = models.ForeignKey(Ciudadanos, on_delete=models.CASCADE)
    fecha = models.ForeignKey(ParticipationsDate, on_delete=models.CASCADE)
    def __str__(self):
        return self.ciudadano.nombre
