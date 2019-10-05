export class Marcador {
    public latitutud: number;
    public longitud: number;

    public titulo = 'Sin titulo';
    public descripcion = 'Sin descripción';


    constructor(latitud: number, longitud: number) {
        this.latitutud = latitud;
        this.longitud = longitud;
    }
}