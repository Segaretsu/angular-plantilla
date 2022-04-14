import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../plugin-corefrontoffice/models/usuario';

export class RegistroValidator {

    registroNuevoForm: FormGroup;
    validacionesComunes: Validators[];
    usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
        this.registroNuevoForm = new FormGroup({
            nombres: new FormControl(this.usuario.nombres, [
                Validators.required, Validators.min(1), Validators.maxLength(40)
            ]),
            apellidos: new FormControl(this.usuario.apellidos, [
                Validators.min(1), Validators.maxLength(40)
            ]),
            correo: new FormControl(this.usuario.correo, [
                Validators.email
            ]),
            clave: new FormControl(this.usuario.clave, [
                Validators.minLength(8), Validators.maxLength(20),
                Validators.pattern("^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$")
            ])
        });
    }

    existenErrores (campo? : String) {
        if(this.registroNuevoForm.get('' + campo).invalid
            && (this.registroNuevoForm.get('' + campo).dirty 
                || this.registroNuevoForm.get('' + campo).touched)){
                    this.getMensajeError(campo);
                    return true;
        } else {
            let elemento = document.getElementById(campo + '-help');
            elemento.setAttribute('data-error', '');
            return false;
        }
    }

    getMensajeError(campo? : String){
        let elemento = document.getElementById(campo + '-help');
        let campoCapital = campo[0].toUpperCase();
        let campoNuevo = campoCapital + campo.substring(1).replace('s','');
        //Comienza la validación
        let formCampo = this.registroNuevoForm.get('' + campo);
        if(formCampo.errors.required) {
            elemento.setAttribute('data-error', campoNuevo + ' requerido');
        }
        if (formCampo.errors.maxlength) {
            let tamanoMaximo = formCampo.errors.maxlength.requiredLength;
            elemento.setAttribute('data-error', campoNuevo + ' no puede contener más de ' + tamanoMaximo + ' caracteres.');
        }
        if(formCampo.errors.minlength) {
            let tamanoMinimo = formCampo.errors.minlength.requiredLength;
            elemento.setAttribute('data-error', campoNuevo + ' debe contener minimo ' + tamanoMinimo + ' caracteres.');
        }
        if(formCampo.errors.pattern) {
            if(campoNuevo === 'Clave') {
                let mensaje = 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.';
                elemento.setAttribute('data-error', mensaje);
            }
        }
    }
}