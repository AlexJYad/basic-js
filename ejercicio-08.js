// ### Ejercicio 8: El bartender

// Pide al usuario que introduzca una bebida (`leche`, `coca-cola` o `cerveza`) y su edad.

// El programa debe responder:

// - Si tiene **más de 18 años**: puede pedir cualquier bebida → `"OK, toma tu bebida"`.
// - Si tiene **entre 15 y 18 años** (sin incluir 18): puede pedir coca-cola o leche → `"OK, toma tu bebida"`; si pide cerveza → `"Lo siento, eres demasiado joven para eso"`.
// - Si tiene **14 años o menos**: solo puede tomar leche → `"OK, toma tu leche"`; si pide otra cosa → `"Solo te puedo ofrecer leche"`.

// **Pista:** empieza por la condición más simple (mayor de 18) y añade los casos más complejos después. Dibuja el árbol de decisiones en papel antes de escribir código.
// **Documentación:** `if / else if / else` · comparadores `>`, `<`, `>=`, `<=`, `===`

// Para usar prompt() en la consola de Node.js instala: npm install prompt-sync
const prompt = require("prompt-sync")();

// Code
let edad = parseInt(prompt("Edad:"));
let bebida = prompt("Bebida: ");

if (bebida !== "leche" && edad < 15) {
   console.log("Solo te puedo ofrecer leche");
} else if (bebida === "cerveza" && edad < 18) {
   console.log("Lo siento, eres demasiado joven para eso");
} else if (
   bebida === "cerveza" ||
   bebida === "leche" ||
   bebida === "coca-cola"
) {
   console.log("OK, toma tu bebida");
} else {
   console.log("No tengo");
}
