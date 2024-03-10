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
<<<<<<< HEAD
import { RegistroConferenciaComponent } from './componentes/registro-conferencia/registro-conferencia.component';
=======
import { MenubarModule } from 'primeng/menubar';

import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent} from './componentes/perfil/perfil.component';

>>>>>>> 5e4b82ffd655ddd17906ce4260e5fff9df05e34b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    RegistroConferenciaComponent
=======
    MenuComponent,
    PerfilComponent
>>>>>>> 5e4b82ffd655ddd17906ce4260e5fff9df05e34b
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
<<<<<<< HEAD
    FormsModule
=======
    MenubarModule
>>>>>>> 5e4b82ffd655ddd17906ce4260e5fff9df05e34b
  ],
 
  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

