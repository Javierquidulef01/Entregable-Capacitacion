"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoEspecial = void 0;
const Curso_1 = require("./Curso");
const ErrorNota_1 = require("./ErrorNota");
class CursoEspecial extends Curso_1.Curso {
    constructor(nombre, modalidad, minimoNotaCuso, notaMinimaTrabajo) {
        super(nombre, modalidad, minimoNotaCuso);
        this.setNotaMinimaTrabajo(notaMinimaTrabajo);
    }
    getNotaMinimaTrabajo() {
        return this.notaMinimaTrabajo;
    }
    setNotaMinimaTrabajo(nota) {
        try {
            if (nota < 0) {
                throw new ErrorNota_1.ErrorNota();
            }
            this.notaMinimaTrabajo = nota;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CursoEspecial = CursoEspecial;
let c = new CursoEspecial("programacion Web", "virtual", -3, -3);
let c2 = new CursoEspecial("programacion Web", "virtual", -9, -2);
console.table(c);
console.log(c.getNotaMinimaCurso());
console.log(c.getNotaMinimaTrabajo());
let promedio = c.getNotaMinimaCurso();
promedio += c2.getNotaMinimaCurso() + c2.getNotaMinimaTrabajo();
console.log(c2.getNotaMinimaTrabajo() == 1 ? "IGUAL A 1" : "No igual a 1");
console.log("promedio");
console.log(promedio);
