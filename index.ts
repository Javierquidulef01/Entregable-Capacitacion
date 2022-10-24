import { Capacitacion } from "./Capacitacion";
import { Curso } from "./Curso";    
import { CursoEspecial } from "./CursoEspecial";
import { Instructor } from "./Instructor";

let instructor1 = new Instructor(12526123,'Martin','Payero',30);
instructor1.getApellido();
let instructor2 = new Instructor(32154899,'Caro','Navarro',30);
instructor2.getApellido();

let curso1 = new Curso ('Programacion','Virtual',7);
let curso2 = new Curso ('Diseño','Presencial',7);

let cursoEspecial1 = new CursoEspecial('PrimerCursoEspecial','virtual',6,6);
cursoEspecial1.getModalidad();
let cursoEspecial2 = new CursoEspecial('PruebaCurso','virtual',-3,-5);

let capacitacion1 = new Capacitacion (curso1);
let capacitacion2 = new Capacitacion (curso2);