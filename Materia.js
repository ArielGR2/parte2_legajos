"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
var Materia = /** @class */ (function () {
    function Materia(asignatura, nota) {
        this.asignatura = asignatura;
        this.nota = nota;
    }
    Materia.prototype.getAsignatura = function () {
        return this.asignatura;
    };
    Materia.prototype.setAsignatura = function (asignatura) {
        this.asignatura = asignatura;
    };
    Materia.prototype.getNota = function () {
        return this.nota;
    };
    Materia.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return Materia;
}());
exports.Materia = Materia;
