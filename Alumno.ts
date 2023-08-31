import { Materia } from "./Materia";

export class Alumno {
    private nombre: String;
    private dni: number;
    private examenes: Materia[];


    constructor(nombre: String, dni: number) {
        this.nombre = nombre;
        this.dni = dni;
        this.examenes = [];

    }
    public getDni(): number {
        return this.dni;
    }
    public setDni(dni): void {
        this.dni = dni;
    }


    public cargaMaterias(aux: Materia): void {
        console.log("Se cargara las asignaturas y notas al arreglo de exámenes")
    }
    public calculaPromedioAlumno(): number {
        let promedioGeneral: number;
        promedioGeneral = 0
        console.log("Usando This.examenes calculamos el promedio del Alumno")
        return promedioGeneral;
    }
}