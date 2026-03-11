// Ejercicio 1: Nombres y datos de entrada

// 1. Crea una variable `conductor` y asígnale tu nombre.
// 2. Muestra por consola el mensaje: `"El nombre del conductor es [nombre]"`.
// 3. Pide al usuario que introduzca el nombre del navegante usando `prompt()` y guárdalo en una variable `navegante`.
// 4. Muestra por consola: `"El nombre del navegante es [nombre]"`.

// **Documentación:** `let` · `console.log()` · `prompt()`

// Para usar prompt() en la consola de Node.js instala: npm install prompt-sync
const prompt = require("prompt-sync")();

// Code
let conductor = "Aleksandr";
console.log("El nombre del conductor es " + conductor);

let navegante = prompt("Introduce el nombre del navegante: ");
console.log("El nombre del navegante es " + navegante);
