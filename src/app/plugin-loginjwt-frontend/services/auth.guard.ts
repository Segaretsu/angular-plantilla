import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginPrincipalService } from './login-principal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {//funcion encargada de validar si existe sesión, esto para proteguer las rutas

  constructor (
    private loginPrincipalService: LoginPrincipalService, 
    private router: Router
  ) { }

  canActivate(): boolean{
    if(this.loginPrincipalService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
