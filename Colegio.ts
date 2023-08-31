import { Alumno } from "./Alumno";

export class Colegio {
    private nombreColegio: String;
    private listadoAlumnos: Alumno[];

    constructor(nombreColegio: String) {
        this.nombreColegio = nombreColegio;
        this.listadoAlumnos = [];
    }
    //Getters
    //Setters
    public calculaPromedioTotal(): number {
        let promedioTotal: number;
        promedioTotal = 0
        console.log("Usando This.listadoAlumnos calculamos el promedio de todos los Alumno")
        return promedioTotal;
    }

    public muestraPromedio(dniAux: number): void {
        let listadoAux = this.listadoAlumnos;

        for (let i = 0; i < listadoAux.length; i++) {
            if (listadoAux[i].getDni() == dniAux) {
                listadoAux[i].calculaPromedioAlumno();

            }

        }
    }
}