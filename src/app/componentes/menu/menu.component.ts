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
      { label: 'Conferencias', routerLink: '/conferencias' },
      { label: 'Registrar Conferencias', routerLink: '/registrar-conferencias' },
      { label: 'Estadisticas', routerLink: '/estadisticas' }
    ];
  }
}
