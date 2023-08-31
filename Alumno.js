"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
        this.examenes = [];
    }
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Alumno.prototype.cargaMaterias = function (aux) {
        console.log("Se cargara las asignaturas y notas al arreglo de exámenes");
    };
    Alumno.prototype.calculaPromedioAlumno = function () {
        var promedioGeneral;
        promedioGeneral = 0;
        console.log("Usando This.examenes calculamos el promedio del Alumno");
        return promedioGeneral;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
