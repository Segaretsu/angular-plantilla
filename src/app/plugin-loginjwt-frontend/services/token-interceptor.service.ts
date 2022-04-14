import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginPrincipalService } from './login-principal.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{// Clase que da formato a los req, y añade cabeceras

  constructor(private loginPrincipalService: LoginPrincipalService) { }

  intercept(req, next) {// Se añade cabecera en cada petición
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.loginPrincipalService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
