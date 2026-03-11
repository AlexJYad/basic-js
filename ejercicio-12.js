// ### Ejercicio 12: ¿Es un palíndromo?

// Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando mayúsculas, espacios y signos de puntuación.

// Pide al usuario que introduzca una cadena y comprueba si es un palíndromo. Muestra el resultado.

// Ejemplos de palíndromos: `"Ana"`, `"Amor, Roma"`, `"race car"`, `"Ana lleva al oso la avellana"`.

// **Pista:** limpia primero la cadena (minúsculas, sin espacios ni signos) y luego compárala con su versión invertida.
// **Documentación:** `String.toLowerCase()` · `String.replace()` · `Array.reverse()`

// Para usar prompt() en la consola de Node.js instala: npm install prompt-sync
const prompt = require("prompt-sync")();

// Code
let texto = prompt("texto: ").toLowerCase().replaceAll(" ", "");
let textoRev = texto.split("").reverse().join("");

console.log("Palíndromo? " + (texto === textoRev));
