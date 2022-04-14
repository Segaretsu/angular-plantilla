import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
/* Propios de la aplicación */ 
import { MenuPrincipalComponent } from './plugin-frontoffice-publico/components/menu-principal/menu-principal.component';
import { HomePublicoComponent } from './plugin-frontoffice-publico/components/home-publico/home-publico.component';
import { RegistroUsuarioComponent } from './plugin-registro-usuarios-frontend/components/registro-usuario/registro-usuario.component';
import { LoginPrincipalComponent } from './plugin-loginjwt-frontend/components/login-principal/login-principal.component';
import { HomePrivadoComponent } from './plugin-frontoffice-publico/components/home-privado/home-privado.component';
/*Para tokens*/
import { AuthGuard } from './plugin-loginjwt-frontend/services/auth.guard';
import { TokenInterceptorService } from './plugin-loginjwt-frontend/services/token-interceptor.service';
import { AlertaEnviadaComponent } from './plugin-alertas-frontend/components/alerta-enviada/alerta-enviada.component';
import { MenuInferiorComponent } from './plugin-frontoffice-publico/components/home-privado/menu-inferior/menu-inferior.component';
import { MenuHomePublicoComponent } from './plugin-frontoffice-publico/components/home-publico/menu-home-publico/menu-home-publico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePublicoComponent,
    MenuPrincipalComponent,
    RegistroUsuarioComponent,
    LoginPrincipalComponent,
    HomePrivadoComponent,
    AlertaEnviadaComponent,
    MenuInferiorComponent,
    MenuHomePublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
