import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './primeng.module';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroConferenciaComponent } from './componentes/registro-conferencia/registro-conferencia.component';
import { MenubarModule } from 'primeng/menubar';

import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent} from './componentes/perfil/perfil.component';
import { ConferenciaComponent } from './componentes/conferencia/conferencia.component';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { ListaConferenciasComponent } from './componentes/lista-conferencias/lista-conferencias.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegistroConferenciaComponent,
    MenuComponent,
    PerfilComponent,
    ConferenciaComponent,
    ListaConferenciasComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
    MenubarModule,
    TabViewModule,
    DialogModule,
    SidebarModule,
    TableModule,
    ChartModule,
    FieldsetModule
  ],
 
  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

