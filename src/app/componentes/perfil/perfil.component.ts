// perfil.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  showProfileInfo = false;

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  toggleProfileInfo() {
    console.log('Clic en la imagen de perfil');
  

    this.showProfileInfo = !this.showProfileInfo;
  }

  logout() {
    // Lógica para cerrar sesión (puede ser un servicio de autenticación)
    console.log('Cerrando sesión...');
  }
}
