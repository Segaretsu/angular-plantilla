import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../plugin-corefrontoffice/models/usuario';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginPrincipalService } from '../../services/login-principal.service';
import { Router } from '@angular/router';
import { AppSettings } from '../../../plugin-corefrontoffice/app-settings';
import { AlertMessages } from '../../../plugin-corefrontoffice/models/alert-messages';

declare var M: any; // Declaramos una variable de Materialize

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.css']
})
export class LoginPrincipalComponent implements OnInit {

  usuarioLogin: Usuario;

  constructor(public loginPrincipalService: LoginPrincipalService, private router: Router) {
    this.usuarioLogin = new Usuario();
  }

  ngOnInit(): void {
    /*Permite inicializar los tooltipped*/
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, []);
    });
  }

  login(form?: NgForm){
    if(form) {
      this.loginPrincipalService.usuarioLogin = this.usuarioLogin;
      this.loginPrincipalService.loginSencillo(this.loginPrincipalService.usuarioLogin)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem(AppSettings.TOKEN_NAME, res['token']);
        this.router.navigate(['/home-privado']);
        AlertMessages.showMessage('Inicio de sesión exitoso', AlertMessages.SUCCESS);
      }, (err) => {
        if(err.status === 401) {
          AlertMessages.showMessage('Valida la información por favor', AlertMessages.WARNING);
        } else if (err.status === 403) {
          AlertMessages.showMessage('Aún no has activado tu cuenta', AlertMessages.INFORMATION);
        }
      });
    }
  }

}
