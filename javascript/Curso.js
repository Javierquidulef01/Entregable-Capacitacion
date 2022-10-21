"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const ErrorNota_1 = require("./ErrorNota");
class Curso {
    constructor(nombre, modalidad, minimoNotaCurso) {
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.setNotaMinimaCurso(minimoNotaCurso);
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getModalidad() {
        return this.modalidad;
    }
    setModalidad(modalidad) {
        this.modalidad = modalidad;
    }
    getNotaMinimaCurso() {
        return this.minimoNotaCurso;
    }
    setNotaMinimaCurso(nota) {
        try {
            if (nota < 0) {
                throw new ErrorNota_1.ErrorNota();
            }
            this.minimoNotaCurso = nota;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.Curso = Curso;
/*
let c = new Curso("programacion Web", "virtual", -3);
let c2 = new Curso("programacion Web", "virtual", -9);

console.table(c)

console.log(c.getNotaMinimaCurso())

let promedio: number = c.getNotaMinimaCurso();

 promedio += c2.getNotaMinimaCurso();

 console.log("promedio");
 console.log(promedio);
*/
