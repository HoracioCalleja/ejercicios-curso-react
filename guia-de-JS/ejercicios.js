const saludo = "Hola";

console.log(saludo);

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

meses.forEach(mes => console.log(mes));

const esPar = (numero) => numero % 2 === 0 ? "Es par" : "Es impar";
console.log(esPar(4))

const tieneAlgunPar = (numeros) => numeros.some(numero => numero % 2 === 0);
console.log(tieneAlgunPar([1,2,3]));

const aprobo = (notas) => notas.every((nota) => nota >= 4);
console.log(aprobo([8,6,2,4]));

const quienesAprobaron = (notasDeAlumnos) => notasDeAlumnos.filter(notas => aprobo(notas));
console.log(quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]))

const hayNegativo = numeros => numeros.some(numero => numero < 0);
console.log(hayNegativo([2,-3,9]));

const par = numero => numero % 2 === 0;

const cuantosCumplen = ( cb, numeros ) => numeros.filter(numero => cb(numero)).length;

console.log(cuantosCumplen(par,[7,9,25,1,42]));

const rechazar = (cb , numeros) => numeros.filter(num => !cb(num));
console.log(rechazar(par,[7,9,87,42]));

const contiene = (clave , vector) => vector.some(elemento => elemento === clave);
console.log(contiene(1,[4,2,3,5]))

class Persona {
  constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  presentarse(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
  }
}


class Estudiante extends Persona {
  constructor(nombre,edad){
    super(nombre,edad);
  }

  estudiando(){
    console.log(`Estudiando con ${this.profesor.nombre}`)
  }

  setProfesor(profesor){
    this.profesor = profesor;
  }

}

class Profesor extends Persona {
  constructor(nombre,edad,estudiantes = []){
    super(nombre,edad);
    this.estudiantes = estudiantes;
  }

  enseñando(){
    if(this.estudiantes.length > 0){
      const nombres = this.estudiantes.map(estudiante => estudiante.nombre);
      console.log(`Enseñando a ${nombres}`)
    }else {
      console.log(`Necesito estudiantes para enseñar`)
    }

  }
  addEstudiante(estudiante){
    estudiante.setProfesor(this);
    this.estudiantes.push(estudiante);
  }
}

const alumno1 = new Estudiante("Juan",20);
const alumno2 = new Estudiante("Pedro",20);
const alumno3 = new Estudiante("Camila",20);

const profesor0 = new Profesor("Einstein",23);
profesor0.presentarse(); // se puede crear sin alumnos
profesor0.enseñando(); // no le enseña a nadie


const profesor1 = new Profesor("Emilia",34);
profesor1.presentarse(); // se puede crear sin alumnos
profesor1.enseñando(); //no enseña a nadie
profesor1.addEstudiante(alumno3); //le añado un alumnx
alumno3.estudiando(); // ahora el alumnx tiene profesorx y viceversa 
profesor1.enseñando(); //enseña a alumno3


const profesor2 = new Profesor("Cristian",25, [alumno1,alumno2]); // se crea con alumnos
profesor2.presentarse(); // se puede crear sin alumnos
profesor2.enseñando();