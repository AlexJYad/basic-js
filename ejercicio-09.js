// ### Ejercicio 9: Del 1 al 30

// 1. Muestra por consola todos los números del 1 al 30.
// 2. Junto a cada número, muestra `"par"` o `"impar"` según corresponda.
// 3. Muestra primero todos los números pares y después todos los impares (en dos pasadas separadas, o usando un criterio de ordenación).

// **Pista:** el operador `%` (módulo) devuelve el resto de una división. Si `n % 2 === 0`, el número es par.
// **Documentación:** [Operador módulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)
for (let i = 1; i <= 30; i++) {
   if (i % 2 === 0) {
      console.log("par:   " + i);
   } else {
      console.log("impar: " + i);
   }
}
console.log("");

for (let i = 2; i <= 30; i += 2) {
   console.log("par:   " + i);
}
console.log("");
for (let i = 1; i <= 30; i += 2) {
   console.log("impar: " + i);
}
