"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colegio = void 0;
var Colegio = /** @class */ (function () {
    function Colegio(nombreColegio) {
        this.nombreColegio = nombreColegio;
        this.listadoAlumnos = [];
    }
    //Getters
    //Setters
    Colegio.prototype.calculaPromedioTotal = function () {
        var promedioTotal;
        promedioTotal = 0;
        console.log("Usando This.listadoAlumnos calculamos el promedio de todos los Alumno");
        return promedioTotal;
    };
    Colegio.prototype.muestraPromedio = function (dniAux) {
        var listadoAux = this.listadoAlumnos;
        for (var i = 0; i < listadoAux.length; i++) {
            if (listadoAux[i].getDni() == dniAux) {
                listadoAux[i].calculaPromedioAlumno();
            }
        }
    };
    return Colegio;
}());
exports.Colegio = Colegio;
