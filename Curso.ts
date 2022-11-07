import { ErrorNota } from './ErrorNota';

export class Curso {
    private nombre: string;
    private modalidad: string;
    private minimoNotaCurso: number;

    public constructor(nombre: string, modalidad: string, minimoNotaCurso: number) {
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.minimoNotaCurso = minimoNotaCurso;
    }

    public getModalidad(): string {
        return this.modalidad;
    }

    public getNotaMinimaCurso(): number {
        return this.minimoNotaCurso;
    }

    public setNotaMinimaCurso(nota: number): void {
        try {
            if (nota < 0) {
                this.minimoNotaCurso = 1;
                throw new ErrorNota();
            }
            this.minimoNotaCurso = nota;
        } catch (error) {
            console.log(error);
        }
    }
}

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
