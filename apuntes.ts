//Tipos de datos
let num = 1;
let text = "hola";
let x = null;
let y = undefined;
//...

// la variable z implicitamente es de tipo any
let z;
// any Ignora el tipado de TypeScript
let anyValue: any = "hola";

//Intentar escribir la menor cantidad de typos posibles

//Inferencia
//Como a y b infiere que son de tipo number sin decirle nada

const a = 1;
const b = 2;
//C tambien sera de tipo number
const c = a + b;

let cadenaDeTexto = "hola";
//El editor detecta automaticamente los metodos que se le pueden aplicar a la cadena de texto
cadenaDeTexto.toLocaleUpperCase();

// x  cadenaDeTexto = 2
// x  cadenaDeTexto.propiedadInexistente

//Funciones
function saludar(name: string) {
  console.log(`hola ${name}`);
}
saludar("Juan");

function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tienes ${age} años.`);
}
saludar2({ name: "Juan", age: 20 });

function saludar3(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`Hola ${name} tienes ${age} años.`);
}
saludar3({ name: "Juan", age: 20 });

function saludar4({ name, age }: { name: string; age: number }): number {
  console.log(`Hola ${name} tienes ${age} años.`);
  return age;
}

// "void" devuelve algo pero no es de importancia
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("Juan");
};

const sayHi = (name: string) => {
  console.log(`hola ${name}`);
};
sayHiFromFunction(sayHi);

// Arrow functions
const sumar = (a: number, b: number) => {
  return a + b;
};
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// Never - nunca va a retornar un value. Va a retornar un error con el mensaje indicado
function trowError(message: string): never {
  if (message) throw new Error(message);
  throw new Error(message);
}

function logMessage(message: string): void {
  console.log(message);
  //throw new Error(message); <-- Never -->
  //return implicito <--- Void  da igual --> no devuelve nada.
}

// Inferencia funciones anonimas segun contexto.



