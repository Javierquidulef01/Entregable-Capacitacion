import { Capacitacion } from "./Capacitacion";
import { Curso } from "./Curso";    
import { CursoEspecial } from "./CursoEspecial";
import { Instructor } from "./Instructor";

let instructor1:Instructor = new Instructor(12526123,'Martin','Payero',30);
console.log(instructor1.getApellido());
let instructor2:Instructor = new Instructor(32154899,'Caro','Navarro',30);
console.log(instructor2.getApellido());

let curso1:Curso = new Curso ('Programacion','Virtual',7);
let curso2:Curso = new Curso ('Diseño','Presencial',7);

let cursoEspecial1:CursoEspecial = new CursoEspecial('PrimerCursoEspecial','virtual',6,6);
let cursoEspecial2:CursoEspecial = new CursoEspecial('PruebaCurso','virtual',-3,-5);

let capacitacion1:Capacitacion = new Capacitacion (curso1);
let capacitacion2:Capacitacion = new Capacitacion (curso2);