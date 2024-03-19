// app-menu.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: any[];

  constructor() {
    this.items = [
      { label: 'Inicio', routerLink: '/home' },
      { label: 'Conferencias', routerLink: '/lista-conferencias' },
      { label: 'Registrar Conferencias', routerLink: '/registroConferencia' },
      { label: 'Estadisticas', routerLink: '/estadisticas' }
    ];
  }
}
