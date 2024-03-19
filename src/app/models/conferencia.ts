export class Conferencia{
    _id?: number;
    titulo: string;
    descripcion: string;
    ponente: string;
    cupo: number;
    horaInicio: Date;
    horaFin: Date;
    lugar: string;
    areaConocimiento: string;
    asistentes: string;

    constructor(titulo: string, descripcion: string, ponente: string, cupo: number, 
        horaInicio: Date, horaFin: Date, lugar: string, areaConocimiento: string, asistentes: string)
        {
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.ponente = ponente;
            this.cupo = cupo;
            this.horaInicio = horaInicio;
            this.horaFin = horaFin;
            this.lugar = lugar;
            this.areaConocimiento = areaConocimiento;
            this.asistentes = asistentes;
    }
}
