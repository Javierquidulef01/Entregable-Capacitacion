import { Curso } from "./Curso";
import { ErrorNota } from "./ErrorNota";

export class CursoEspecial extends Curso {
    private notaMinimaTrabajo: number;

    public constructor(nombre: string, modalidad: string, minimoNotaCuso: number, notaMinimaTrabajo: number) {
        super(nombre, modalidad, minimoNotaCuso);
        this.setNotaMinimaTrabajo(notaMinimaTrabajo)
    }

    public getNotaMinimaTrabajo(): number {
        return this.notaMinimaTrabajo;
    }

    public setNotaMinimaTrabajo(nota: number): void {
        try {
            if (nota < 0) {
                throw new ErrorNota();
            } 
            this.notaMinimaTrabajo = nota;
        } catch (error) {
            console.log(error);
        } 
    }

}
/*
let c = new CursoEspecial("programacion Web", "virtual", -3, -3);
let c2 = new CursoEspecial("programacion Web", "virtual", -9, -2);

console.table(c)

console.log(c.getNotaMinimaCurso())
console.log(c.getNotaMinimaTrabajo())

let promedio: number = c.getNotaMinimaCurso();

 promedio += c2.getNotaMinimaCurso() + c2.getNotaMinimaTrabajo();

 console.log(c2.getNotaMinimaTrabajo() == 1? "IGUAL A 1": "No igual a 1")
 console.log("promedio");
 console.log(promedio);
 */