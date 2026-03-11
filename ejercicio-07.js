// ### Ejercicio 7: ¿Quién tiene el nombre más largo?

// Usando las variables `conductor` y `navegante` del Ejercicio 1, compara la longitud de ambos nombres y muestra por consola:

// - `"El conductor tiene el nombre más largo: XX caracteres"`, o
// - `"El navegante tiene el nombre más largo: XX caracteres"`, o
// - `"Los dos nombres tienen la misma longitud: XX caracteres"`.

// **Documentación:** `String.length` · `if / else if / else`

let conductor = "Alex";
// conductor = "Al";
// conductor = "Aleksandr"
let navegante = "Inna";
let conL = conductor.length;
let navL = navegante.length;

if (conL > navL) {
   console.log(
      "El conductor tiene el nombre más largo: " + conL + " caracteres",
   );
} else if (conL < navL) {
   console.log(
      "El navegante tiene el nombre más largo: " + navL + " caracteres",
   );
} else {
   console.log(
      "Los dos nombres tienen la misma longitud: " + conL + " caracteres",
   );
}
