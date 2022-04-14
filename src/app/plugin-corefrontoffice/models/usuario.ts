export class Usuario {
    _id: String;
    nombres: string;
    apellidos: string;
    username: string;
    correo: string;
    clave: string;

    constructor(_id = '', nombres = '', apellidos = '', username = '',
     clave = '', correo = '') {
        this._id = _id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.clave = clave;
    }
}
