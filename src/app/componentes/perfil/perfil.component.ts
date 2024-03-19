// perfil.component.ts
import { Component} from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  visible: boolean = false;

  sidebarVisibleR: boolean = false;

  user = {
    name: 'Anna',
    email: 'Ana@example.com',
    // Otros campos del usuario
  };
  
  showDialog() {
     
      this.visible = true;
  }

  logout() {
    // Lógica para cerrar sesión (puede ser un servicio de autenticación)
    console.log('Cerrando sesión...');
  }

 

 
}
