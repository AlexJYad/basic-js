// ### Ejercicio 10: Nombre al revés y orden alfabético

// Usando las variables del Ejercicio 1:

// 1. Muestra el nombre del `navegante` escrito al revés.
//    Ejemplo: si el nombre es `"Teresa"`, mostrar `"asereT"`.

// 2. Compara los dos nombres por orden alfabético y muestra:
//    - `"El nombre del conductor va primero alfabéticamente"`, o
//    - `"El nombre del navegante va primero alfabéticamente"`, o
//    - `"¡Los dos nombres son iguales!"`.

// **Pista:** JavaScript compara strings con los operadores `<` y `>`. ¿Cómo funciona esa comparación exactamente? Búscalo en MDN.
// **Documentación:** [Comparación de strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Less_than)

let conductor = "Anna";
// conductor = "Inna";
// conductor = "Alex";
console.log(conductor);
let navegante = "";

for (let i = conductor.length - 1; i >= 0; i -= 1) {
   navegante += conductor[i];
}

console.log(navegante);

if (conductor.toLowerCase() < navegante.toLowerCase()) {
   console.log("El nombre del conductor va primero alfabéticamente");
} else if (navegante.toLowerCase() < conductor.toLowerCase()) {
   console.log("El nombre del navegante va primero alfabéticamente");
} else {
   console.log("¡Los dos nombres son iguales!");
}
