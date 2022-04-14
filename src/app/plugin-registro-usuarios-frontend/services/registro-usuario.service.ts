import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../plugin-corefrontoffice/models/usuario';
import { AppSettings } from '../../plugin-corefrontoffice/app-settings';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  usuarioNuevo: Usuario;
  readonly URL_API = AppSettings.API_ENDPOINT + 'usuarios/registrarUsuarioNuevo';
  readonly URL_CORREO = AppSettings.API_ENDPOINT + 'alertas/activar-cuenta';

  constructor(private http: HttpClient) { 
    this.usuarioNuevo = new Usuario();
  }

  registrarUsuario (Usuario: Usuario) {
    return this.http.post(this.URL_API, Usuario);
  }

  activarCuenta (Usuario: Usuario) {
    return this.http.post(this.URL_CORREO, Usuario);
  }
}
