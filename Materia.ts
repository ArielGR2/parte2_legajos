export class Materia {
    private asignatura: String;
    private nota: number;

    constructor(asignatura: String, nota: number) {
        this.asignatura = asignatura;
        this.nota = nota;
    }

    getAsignatura(): String {
        return this.asignatura;
    }
    setAsignatura(asignatura): void {
        this.asignatura = asignatura;
    }
    getNota(): number {
        return this.nota;
    }
    setNota(nota): void {
        this.nota = nota;
    }


}