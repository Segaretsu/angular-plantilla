import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../plugin-corefrontoffice/models/usuario';
import { Router } from '@angular/router';
import { AppSettings } from '../../plugin-corefrontoffice/app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginPrincipalService {

  usuarioLogin: Usuario;

  readonly URL_API = AppSettings.API_ENDPOINT + 'login/login-sencillo';
  
  constructor(private http: HttpClient, private router: Router) { 
    this.usuarioLogin = new Usuario();
  }

  loginSencillo (Usuario: Usuario) {
    return this.http.post(this.URL_API, Usuario);
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem(AppSettings.TOKEN_NAME); // !!: Si existe retorna true, sino false
  }

  getToken () {
    return localStorage.getItem(AppSettings.TOKEN_NAME);
  }

  logout () { //Cerrar sesion
    localStorage.removeItem(AppSettings.TOKEN_NAME);
    this.router.navigate(['/']);
  }
}
