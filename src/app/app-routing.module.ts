import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { authGuard } from './guards/auth.guard';
import { RegistroConferenciaComponent } from './componentes/registro-conferencia/registro-conferencia.component';
import { ConferenciaComponent } from './componentes/conferencia/conferencia.component';
import { ListaConferenciasComponent } from './componentes/lista-conferencias/lista-conferencias.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path:'home',
    component: HomeComponent
    //canActivate:[authGuard]
  },
  {
    path: 'conferencias',
    component : ConferenciaComponent
  },
  {
    path: 'lista-conferencias',
    component : ListaConferenciasComponent
  },
  {
    path:'registroConferencia',
    component: RegistroConferenciaComponent
  },
  {
    path: 'estadisticas',
    component : EstadisticasComponent
  },
  {
    path:'', 
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**', 
    redirectTo:'home',
    pathMatch:'full'
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
