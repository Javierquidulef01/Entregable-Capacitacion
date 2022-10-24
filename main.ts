import { Capacitacion } from "./Capacitacion";
import { Curso } from "./Curso";    
import { CursoEspecial } from "./CursoEspecial";
import { Instructor } from "./Instructor";

let instructor1:Instructor = new Instructor(12526123,'Martin','Payero',30);
console.log(instructor1.getApellido());
let instructor2:Instructor = new Instructor(32154899,'Caro','Navarro',30);
console.log(instructor2.getApellido());
let instructor3:Instructor = new Instructor(31569985, 'Lucas', 'Fernandez', 25);
console.log(instructor3.getApellido());


let curso1:Curso = new Curso ('Programacion','Virtual',7);
let curso2:Curso = new Curso ('Diseño','Presencial',7);


let cursoEspecial1:CursoEspecial = new CursoEspecial('PrimerCursoEspecial','virtual',6,6);
let cursoEspecial2:CursoEspecial = new CursoEspecial('PruebaCurso','virtual',-3,-5);

let capacitacion1:Capacitacion = new Capacitacion (curso1);
let capacitacion2:Capacitacion = new Capacitacion (curso2);
let capacitacion3:Capacitacion = new Capacitacion (cursoEspecial1);


function inscribirIntructor(pInstructor:Instructor, pCapacitacion : Capacitacion){
    if (pInstructor.inscribirACurso(pCapacitacion)) {
        console.log("El instructor: " + pInstructor.getNombre() + " " + pInstructor.getApellido() + " se inscribio al curso: " + pCapacitacion.getCurso().getNombre());
    } else { console.log("El instructor: " + pInstructor.getNombre() + " " + pInstructor.getApellido() + " no se puede inscribir al curso: " + pCapacitacion.getCurso().getNombre() + " porque ya esta inscripto") }
}
function imprimirNotas(pCapacitacion : Capacitacion){
    console.log("Las notas de capacitacion " + pCapacitacion.getCurso().getNombre() + " son : " + pCapacitacion.getNotasCurso())
};

capacitacion1.agregarNota(8);
capacitacion1.agregarNota(1);
capacitacion1.agregarNota(10);
capacitacion1.agregarNota(2);
capacitacion1.agregarNota(10);
capacitacion2.agregarNota(3);
capacitacion2.agregarNota(2);
capacitacion2.agregarNota(1);
capacitacion2.agregarNota(7);
capacitacion2.agregarNota(9);

imprimirNotas(capacitacion1);
imprimirNotas(capacitacion2);

inscribirIntructor(instructor1,capacitacion1);
inscribirIntructor(instructor2,capacitacion3);
inscribirIntructor(instructor3,capacitacion2);
