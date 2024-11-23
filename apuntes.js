"use strict";
//Tipos de datos
let num = 1;
let text = "hola";
let x = null;
let y = undefined;
//...
// la variable z implicitamente es de tipo any
let z;
// any Ignora el tipado de TypeScript
let anyValue = "hola";
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
function saludar(name) {
    console.log(`hola ${name}`);
}
saludar("Juan");
function saludar2({ name, age }) {
    console.log(`Hola ${name} tienes ${age} años.`);
}
saludar2({ name: "Juan", age: 20 });
function saludar3(persona) {
    const { name, age } = persona;
    console.log(`Hola ${name} tienes ${age} años.`);
}
saludar3({ name: "Juan", age: 20 });
function saludar4({ name, age }) {
    console.log(`Hola ${name} tienes ${age} años.`);
    return age;
}
// "void": para funciones que no devuelven nada. "devuelve algo pero no es de importancia"
//Evitar usar fn :Function
const sayHiFromFunction = (fn) => {
    return fn("Juan");
};
const sayHi = (name) => {
    console.log(`hola ${name}`);
};
sayHiFromFunction(sayHi);
// Tipar Arrow functions
const sumar = (a, b) => {
    return a + b;
};
const restar = (a, b) => {
    return a - b;
};
// Never - nunca va a retornar un value. Va a retornar un error con el mensaje indicado
function trowError(message) {
    if (message)
        throw new Error(message);
    throw new Error(message);
}
function logMessage(message) {
    console.log(message);
    //throw new Error(message); <-- Never -->
    //return implicito <--- Void  da igual --> no devuelve nada.
}
// Inferencia funciones anonimas segun contexto.
const avengers = ["Yo", "Thor", "Ironman"];
avengers.forEach((avenger) => console.log(avenger.toUpperCase()));
const hero = [];
const gameBoard = [
    ['x', 'o', 'o'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x'],
];
console.log(gameBoard);
