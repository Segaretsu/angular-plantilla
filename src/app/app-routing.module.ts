import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePublicoComponent } from './plugin-frontoffice-publico/components/home-publico/home-publico.component';
import { RegistroUsuarioComponent } from './plugin-registro-usuarios-frontend/components/registro-usuario/registro-usuario.component';
import { LoginPrincipalComponent } from './plugin-loginjwt-frontend/components/login-principal/login-principal.component';
import { HomePrivadoComponent } from './plugin-frontoffice-publico/components/home-privado/home-privado.component';
import { AlertaEnviadaComponent } from './plugin-alertas-frontend/components/alerta-enviada/alerta-enviada.component';

import { AuthGuard } from './plugin-loginjwt-frontend/services/auth.guard';

const routes: Routes = [
  //{ path: '**', component: Page404Component},
  { path: '', component: HomePublicoComponent },
  { path: 'usuarios/registrar-usuario', component: RegistroUsuarioComponent },
  { path: 'login', component: LoginPrincipalComponent },
  { path: 'home-privado', component: HomePrivadoComponent ,
    canActivate: [AuthGuard]}, // Validamos que el usuario este loggeado
  { path: 'alerta-enviada/:nombreAlerta', component: AlertaEnviadaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
