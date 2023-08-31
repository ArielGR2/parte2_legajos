import { Colegio } from "./Colegio";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

let colegio1 = new Colegio("Esc Normal");

let alumno1 = new Alumno("Ariel", 32000000);

//Cargamos materias al alumno:
alumno1.cargaMaterias(new Materia("Lengua", 7));
alumno1.cargaMaterias(new Materia("Fisica", 10));
alumno1.cargaMaterias(new Materia("Historia", 4));
alumno1.cargaMaterias(new Materia("Matematica", 10));

alumno1.calculaPromedioAlumno();
colegio1.calculaPromedioTotal();
colegio1.muestraPromedio(32000000);