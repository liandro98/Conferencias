import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-registro-conferencia',
  templateUrl: './registro-conferencia.component.html',
  styleUrl: './registro-conferencia.component.css'
})
export class RegistroConferenciaComponent implements OnInit {

  cities: City[] | undefined;

  selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: '2:20', code: '1' },
            { name: '3:20', code: '2' },
            { name: '4:20', code: '3' },
            { name: '5:20', code: '4' },
            { name: '6:20', code: '5' }
        ];
    }
}
