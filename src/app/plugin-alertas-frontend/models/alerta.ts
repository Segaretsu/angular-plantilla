export class Alerta {
    _id: String;
    nombreImagen: String;
    titulo: String;
    descripcion: String;
    tituloBoton: String;
    rutaBoton: String;

    public constructor (_id = '', nombreImagen = '', titulo = '', 
        descripcion = '', tituloBoton = '', rutaBoton = '') {
        this._id = _id;
        this.nombreImagen = nombreImagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tituloBoton = tituloBoton;
        this.rutaBoton = rutaBoton;
    }

    getAlertaActivarCuenta() {
        this.nombreImagen = 'MailSend.png';
        this.titulo = 'Correo de activación envíado';
        this.descripcion = 'Hemos enviado una notificación para activar tu cuenta desde tu correo.';
        this.tituloBoton = 'Voler al inicio';
        this.rutaBoton = '/';
    }

    getAlertaCuentaActivada() {
        this.nombreImagen = 'ActivateAcountSuccess.png';
        this.titulo = '¡Cuenta activada con éxito!';
        this.descripcion = 'Tu cuenta a sido activada exitosamente, ya puedes disfrutar de la aplicación.';
        this.tituloBoton = 'Iniciar sesión';
        this.rutaBoton = '/login';
    }
}
