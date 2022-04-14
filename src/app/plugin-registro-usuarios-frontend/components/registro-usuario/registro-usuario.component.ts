import { Component, OnInit } from '@angular/core';
/*Importaciones propias*/
import { RegistroUsuarioService } from '../../../plugin-registro-usuarios-frontend/services/registro-usuario.service';
import { Usuario } from '../../../plugin-corefrontoffice/models/usuario';
import { RegistroValidator} from './registro-usuario.validator';
import { AppSettings } from '../../../plugin-corefrontoffice/app-settings';
import { AlertMessages } from '../../../plugin-corefrontoffice/models/alert-messages';
import { Router } from '@angular/router';

declare var M: any; // Declaramos una variable de Materialize

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
  providers: [RegistroUsuarioService, RegistroValidator]
})
export class RegistroUsuarioComponent implements OnInit {

  usuarioRegistro: Usuario;

  constructor(public registroUsuarioService: RegistroUsuarioService, public registroValidator: RegistroValidator,
    public router: Router) { 
    this.usuarioRegistro = new Usuario();
    this.registroValidator.usuario = this.usuarioRegistro;
  }

  ngOnInit(): void {

    /*Permite inicializar los tooltipped*/
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, []);
    });
  }

  registrarUsuario(){
    this.usuarioRegistro = this.registroValidator.registroNuevoForm.value;
    if(this.validacionDataNoNula(this.usuarioRegistro)) {
      this.registroUsuarioService.usuarioNuevo = this.usuarioRegistro;
      this.registroUsuarioService.registrarUsuario(this.registroUsuarioService.usuarioNuevo)
      .subscribe(res => {
        localStorage.setItem(AppSettings.TOKEN_NAME, res['token']);
        this.router.navigate(['alerta-enviada/activar-cuenta']);
        AlertMessages.showMessage('¡Usuario registrado con exito!', AlertMessages.SUCCESS);
      }, (err) => {
        if(err.status === 409) {
          AlertMessages.showMessage('Cuenta actualmente existente', AlertMessages.INFORMATION);
        } else if(err.status === 422) {
          AlertMessages.showMessage('Valida la información, por favor', AlertMessages.WARNING);
        } else if (err.status === 500){
          AlertMessages.showMessage('oh no :(, no eres tú somos nosotros, algo a ido mal.', AlertMessages.ERROR);
        }
      });
    } else {
      AlertMessages.showMessage('Diligencia la información, por favor', AlertMessages.INFORMATION);
    }
  }

  validacionDataNoNula (usuario: Usuario){
    if(!usuario.nombres){ return false; }
    if(!usuario.apellidos){ return false; }
    if(!usuario.correo){ return false; }
    if(!usuario.clave){ return false; }
    return true;
  }

}
