import { Component , OnInit } from '@angular/core';
import { ConferenciaService } from '../../services/conferencia.service';

@Component({
  selector: 'app-lista-conferencias',
  templateUrl: './lista-conferencias.component.html',
  styleUrl: './lista-conferencias.component.css'
})
export class ListaConferenciasComponent {
  //conferencia!: Conferencia[];

 // constructor(private conferenciaService: ConferenciaService) {}

 // ngOnInit() {
  //    this.conferenciaService.getConferencia().then((data) => {
   //       this.conferencia = data;
   //   });
  //}
}
