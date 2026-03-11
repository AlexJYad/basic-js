// ### Ejercicio 6: Dado virtual

// Simula el lanzamiento de un dado de seis caras.

// Cada vez que se ejecute el programa, debe mostrar por consola un número entero aleatorio entre 1 y 6 (ambos incluidos).

// **Pista:** `Math.random()` devuelve un número decimal entre 0 (incluido) y 1 (excluido). Investiga cómo transformarlo en un entero dentro del rango que necesitas. `Math.floor()` te será útil.
// **Documentación:** `Math.random()` · `Math.floor()`

let max = 7;
let min = 1;

console.log(Math.floor(Math.random() * (max - min) + min));
