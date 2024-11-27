// //Tipos de datos
// let num = 1;
// let text = "hola";
// let x = null;
// let y = undefined;
// //...

// // la variable z implicitamente es de tipo any
// let z;
// // any Ignora el tipado de TypeScript
// let anyValue: any = "hola";

// //Intentar escribir la menor cantidad de typos posibles

// //Inferencia
// //Como a y b infiere que son de tipo number sin decirle nada

// const a = 1;
// const b = 2;
// //C tambien sera de tipo number
// const c = a + b;

// let cadenaDeTexto = "hola";
// //El editor detecta automaticamente los metodos que se le pueden aplicar a la cadena de texto
// cadenaDeTexto.toLocaleUpperCase();

// // x  cadenaDeTexto = 2
// // x  cadenaDeTexto.propiedadInexistente

// //Funciones
// function saludar1(name: string) {
//   console.log(`hola ${name}`);
// }
// saludar("Juan");

// function saludar2({ name, age }: { name: string; age: number }) {
//   console.log(`Hola ${name} tienes ${age} años.`);
// }
// saludar2({ name: "Juan", age: 20 });

// function saludar3(persona: { name: string; age: number }) {
//   const { name, age } = persona;
//   console.log(`Hola ${name} tienes ${age} años.`);
// }
// saludar3({ name: "Juan", age: 20 });

// function saludar4({ name, age }: { name: string; age: number }): number {
//   console.log(`Hola ${name} tienes ${age} años.`);
//   return age;
// }

// // "void": para funciones que no devuelven nada. "devuelve algo pero no es de importancia"
// //Evitar usar fn :Function
// const sayHiFromFunction = (fn: (name: string) => void) => {
//   return fn("Juan");
// };

// const sayHi = (name: string) => {
//   console.log(`hola ${name}`);
// };
// sayHiFromFunction(sayHi);

// // Tipar Arrow functions
// const sumar1 = (a: number, b: number) => {
//   return a + b;
// };
// const restar: (a: number, b: number) => number = (a, b) => {
//   return a - b;
// };

// // Never - nunca va a retornar un value. Va a retornar un error con el mensaje indicado
// function trowError(message: string): never {
//   if (message) throw new Error(message);
//   throw new Error(message);
// }

// function logMessage(message: string): void {
//   console.log(message);
//   //throw new Error(message); <-- Never -->
//   //return implicito <--- Void  da igual --> no devuelve nada.
// }

// // Inferencia funciones anonimas segun contexto.
// const avengers: string[] = ["Yo", "Thor", "Ironman"];
// avengers.forEach((avenger) => console.log(avenger.toUpperCase()));

//Objetos

// let hero = {
//   name: "Peter",
//   age: 25,
// }

// function createHero(name :string, age :number ){
//   return {
//     name,
//     age
//   }
// }

// createHero("Peter", 25);

// Type Alias

// type Hero ={ // Pascal case
//   name: string,
//   age:number
// }

// let hero :Hero={
//   name: "Peter",
//   age: 25,
// };

// function createHero(hero : Hero): Hero{
//   const {name, age}= hero
//   return{name,age}
// }

// const spiterman = createHero({name:"espiterman", age:10})
// console.log(spiterman);

//Optional properties

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// // Pascal case
// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean; //Propiedad opcional "?"
// };

// let hero: Hero = {
//   name: "Peter",
//   age: 25,
//   isActive: false,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = Object.freeze(createHero({ name: "Esteban", age: 22 }));
// console.log(thor);

// // template union types
// type HexadecimalColor = `#${string}`;
// const color: HexadecimalColor = "#0033ff"; // hexadecimales

//Union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local'| 'planetary' | 'galactic';

// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
//   powerScale? :HeroPowerScale;
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = createHero({ name: "Thor", age: 22 });
// thor.powerScale ="local"
// console.log(thor);

//Intersection types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = 'local'| 'planetary' | 'galactic';

// type HeroBasicInfo ={
//   name: string;
//   age: number;
// }
// type HeroProperties = {
//   readonly id?: HeroId;
//   isActive?: boolean;
//   powerScale? :HeroPowerScale;
// };

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//   name: "Peter",
//   age: 25,
//   isActive: false,
// };

// function createHero(hero: HeroBasicInfo): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }

// const thor = createHero({ name: "Thor", age: 22 });
// thor.powerScale ="local"
// console.log(thor);

// type indexing

// type HeroProperties = {
//   isActive: boolean;
//   address:{
//     planet: string;
//     city: string;
//   }
// };
// const heroAddress: HeroProperties["address"] = {
//   planet: "Earth",
//   city: "New York",
// };

// Type from value

// const address ={
//   planet: "Earth",
//   city: "New York",
// }

// type Address = typeof address;

// const heroAddress: Address = {
//   planet: "Earth",
//   city: "New York",
// }

//Type from function return

// function createAddress() {
//   return {
//     planet: "Earth",
//     city: "New York",
//   };
// }

// type Address = ReturnType<typeof createAddress>;

// const languajes:/*(string, number)[]*/Array<string | boolean | number> =[];
// languajes.push("Typescript");
// languajes.push("Javascript");
// languajes.push("Java");
// languajes.push("PHP");
// languajes.push(2);
// languajes.push(true);

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type HeroPowerScale = "local" | "planetary" | "galactic";

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// };

// const hero: HeroBasicInfo[] = [];

// //tuplas

// /*
// [
//   ['x','o','o'],
//   ['o','x','o'],
//   ['x','o','x'],
// ]
// */

// type CellValue = 'x' | 'o' | '';
// type GameBoard =[
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
// ]

// const gameBoard : GameBoard = [
//   ['x','o','o'],
//   ['o','x','o'],
//   ['x','o','x'],
// ]
// console.log(gameBoard);


// type RGB = readonly [number, number, number];

// const black: RGB = [0,0,0];
// const white: RGB = [255,255,255];

// //readonly para tuplas fijas

// //enums

// const enum ERROR_TYPES{ 
//   NOT_FOUND = 'NOT_FOUND',
//   UNAUTHORIZED = 'UNAUTHORIZED',
//   FORBIDDEN = 'FORBIDDEN'
// }
// function mostarMensaje(tipoDeError: ERROR_TYPES){ 
//   if(tipoDeError === ERROR_TYPES.NOT_FOUND){
//     console.log("El recurso no se encuentra");
//   } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
//     console.log("No estas autorizado");
//   }else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
//     console.log("No estas autorizado");
//   }
// }

//Aserciones de tipos

// bien eliminar erroe en tiempo de ejecucuion
// const  canvas = document.querySelector("canvas");

// if (canvas instanceof HTMLCanvasElement) {
//   const ctx = canvas.getContext("2d");
// }

// // No recomendable
// const  canv = document.querySelector("canvas") as HTMLCanvasElement;

// if (canv !== null) {
//   const ctx = canv.getContext("2d");
// }

// const canvas1 = document.querySelector("canvas");

// if (canvas1 !== null) {
//   const ctx = (canvas1 as HTMLCanvasElement).getContext("2d");
// }
