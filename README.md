# JavaScript — Ejercicios de iniciación

## Antes de empezar

### Cómo buscar lo que necesitas

Estos ejercicios requieren consultar la documentación. La fuente de referencia para JavaScript es **MDN Web Docs**:

> [developer.mozilla.org/es/docs/Web/JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

Cuando no sepas cómo hacer algo, busca el nombre del método o concepto directamente en MDN. Por ejemplo: «MDN String indexOf», «MDN Math.random», «MDN for loop».

**No uses IA para resolver los ejercicios.** El objetivo es que tu cerebro construya el camino entre el problema y la solución. Si la IA lo hace por ti, ese camino no se forma.

### Organización del trabajo

Crea **un archivo `.js` por ejercicio**. Nómbralos de forma descriptiva siguiendo el número de ejercicio: `ejercicio-01.js`, `ejercicio-02.js`, etc.

Trabaja con commits frecuentes. Cada vez que termines un ejercicio (o parte de él), haz un commit:

```
git add ejercicio-01.js
git commit -m "feat: ejercicio 1 - variables y prompt"
```

Al final de cada sesión de trabajo, sube los cambios al repositorio remoto:

```
git push
```

Usa mensajes de commit en minúsculas y en español o inglés. Describe qué hace el ejercicio, no «añado archivo» o «subo trabajo».

---

### Consejos para quien empieza a programar

**1. Lee el enunciado entero antes de escribir nada.**
Identifica: ¿qué datos entran? ¿qué tiene que salir? ¿qué pasos hay en medio?

**2. Escribe en papel antes de escribir código.**
Describe con palabras o pseudocódigo lo que tiene que hacer el programa. «Si el número es mayor que 18, mostrar X. Si no, mostrar Y.» Luego traduce eso a JavaScript.

**3. Trabaja en pequeños pasos.**
No intentes escribir el ejercicio completo de una vez. Comprueba que cada pieza funciona antes de añadir la siguiente. Usa `console.log()` para ver qué valor tiene una variable en cada momento.

**4. Los errores son parte del proceso.**
Cuando el código no funciona, lee el mensaje de error en la consola. Suele decirte exactamente en qué línea está el problema. Aprende a leer esos mensajes.

**5. Cuando estés bloqueado, explica el problema en voz alta.**
Describir el problema a alguien (o a ti mismo) a menudo revela dónde está el error. Es lo que se llama [rubber duck debugging](https://es.wikipedia.org/wiki/M%C3%A9todo_del_patito_de_goma).

### Documentación que necesitarás en estos ejercicios

| Concepto                   | Enlace MDN                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Variables (`let`, `const`) | [MDN — let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)                     |
| `console.log()`            | [MDN — console.log](https://developer.mozilla.org/es/docs/Web/API/console/log)                                 |
| `prompt()`                 | [MDN — prompt](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)                                    |
| `alert()`                  | [MDN — alert](https://developer.mozilla.org/es/docs/Web/API/Window/alert)                                      |
| String — métodos           | [MDN — String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)           |
| `if / else`                | [MDN — if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)         |
| Bucle `for`                | [MDN — for](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)                     |
| Bucle `while`              | [MDN — while](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)                 |
| `Math.random()`            | [MDN — Math.random](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) |
| `Math.floor()`             | [MDN — Math.floor](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)   |

## Nivel 1 — Variables y salida de datos

### Ejercicio 1: Nombres y datos de entrada

1. Crea una variable `conductor` y asígnale tu nombre.
2. Muestra por consola el mensaje: `"El nombre del conductor es [nombre]"`.
3. Pide al usuario que introduzca el nombre del navegante usando `prompt()` y guárdalo en una variable `navegante`.
4. Muestra por consola: `"El nombre del navegante es [nombre]"`.

**Documentación:** `let` · `console.log()` · `prompt()`

### Ejercicio 2: Las letras de tu nombre

Muestra por consola cada letra de tu nombre por separado, en mayúsculas, separadas por un espacio.

Ejemplo: si tu nombre es `"Raul"`, la salida debe ser `R A U L`.

Hazlo usando un bucle. No escribas cada letra a mano.

**Pista:** necesitas recorrer el string carácter a carácter y aplicar un método para convertirlo a mayúsculas.  
**Documentación:** `for` · `String.toUpperCase()` · `String.length`

## Nivel 2 — Strings y métodos

### Ejercicio 3: Posición de una letra

La frase `"My favorite dessert is jello"` contiene la letra `j`.

Escribe un programa que encuentre en qué posición (índice) está esa letra y lo muestre por consola.

**Pista:** los strings tienen un método que devuelve la posición de un carácter dentro de la cadena.  
**Documentación:** [String.indexOf()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

### Ejercicio 4: Saludo personalizado

Pide al usuario su nombre y su apellido por separado usando `prompt()`.
Muestra por consola el saludo: `"Hola, [nombre] [apellido]!"`.

**Pista:** busca cómo unir dos strings en JavaScript.  
**Documentación:** [Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

## Nivel 3 — Aritmética y conversión de tipos

### Ejercicio 5: Años para jubilarse

Pide al usuario que introduzca su edad con `prompt()`.
Calcula cuántos años le quedan para jubilarse, sabiendo que la edad de jubilación es 67 años.
Muestra el resultado con `alert()`.

**Pista:** el valor que devuelve `prompt()` es siempre un string, aunque el usuario escriba un número. Busca cómo convertirlo a número antes de operar.  
**Documentación:** [Number()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) · [parseInt()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

### Ejercicio 6: Dado virtual

Simula el lanzamiento de un dado de seis caras.

Cada vez que se ejecute el programa, debe mostrar por consola un número entero aleatorio entre 1 y 6 (ambos incluidos).

**Pista:** `Math.random()` devuelve un número decimal entre 0 (incluido) y 1 (excluido). Investiga cómo transformarlo en un entero dentro del rango que necesitas. `Math.floor()` te será útil.  
**Documentación:** `Math.random()` · `Math.floor()`

## Nivel 4 — Condicionales

### Ejercicio 7: ¿Quién tiene el nombre más largo?

Usando las variables `conductor` y `navegante` del Ejercicio 1, compara la longitud de ambos nombres y muestra por consola:

- `"El conductor tiene el nombre más largo: XX caracteres"`, o
- `"El navegante tiene el nombre más largo: XX caracteres"`, o
- `"Los dos nombres tienen la misma longitud: XX caracteres"`.

**Documentación:** `String.length` · `if / else if / else`

### Ejercicio 8: El bartender

Pide al usuario que introduzca una bebida (`leche`, `coca-cola` o `cerveza`) y su edad.

El programa debe responder:

- Si tiene **más de 18 años**: puede pedir cualquier bebida → `"OK, toma tu bebida"`.
- Si tiene **entre 15 y 18 años** (sin incluir 18): puede pedir coca-cola o leche → `"OK, toma tu bebida"`; si pide cerveza → `"Lo siento, eres demasiado joven para eso"`.
- Si tiene **14 años o menos**: solo puede tomar leche → `"OK, toma tu leche"`; si pide otra cosa → `"Solo te puedo ofrecer leche"`.

**Pista:** empieza por la condición más simple (mayor de 18) y añade los casos más complejos después. Dibuja el árbol de decisiones en papel antes de escribir código.  
**Documentación:** `if / else if / else` · comparadores `>`, `<`, `>=`, `<=`, `===`

## Nivel 5 — Bucles

### Ejercicio 9: Del 1 al 30

1. Muestra por consola todos los números del 1 al 30.
2. Junto a cada número, muestra `"par"` o `"impar"` según corresponda.
3. Muestra primero todos los números pares y después todos los impares (en dos pasadas separadas, o usando un criterio de ordenación).

**Pista:** el operador `%` (módulo) devuelve el resto de una división. Si `n % 2 === 0`, el número es par.  
**Documentación:** [Operador módulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)

### Ejercicio 10: Nombre al revés y orden alfabético

Usando las variables del Ejercicio 1:

1. Muestra el nombre del `navegante` escrito al revés.  
   Ejemplo: si el nombre es `"Teresa"`, mostrar `"asereT"`.

2. Compara los dos nombres por orden alfabético y muestra:
   - `"El nombre del conductor va primero alfabéticamente"`, o
   - `"El nombre del navegante va primero alfabéticamente"`, o
   - `"¡Los dos nombres son iguales!"`.

**Pista:** JavaScript compara strings con los operadores `<` y `>`. ¿Cómo funciona esa comparación exactamente? Búscalo en MDN.  
**Documentación:** [Comparación de strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Less_than)

## Nivel 6 — Retos

### Ejercicio 11: Letter Quizz

Escribe un programa que:

1. Pida al usuario una cadena de texto con `prompt()`.
2. Genere un carácter aleatorio (una letra del abecedario).
3. Compruebe si la cadena introducida contiene ese carácter.
4. Muestre `true` o `false` con `alert()`.

**Pista:** para generar una letra aleatoria puedes partir de un string con todas las letras del abecedario (como un array o una cadena) y elegir uno de sus elementos aleatoriamente con `Math.random()`.  
**Documentación:** `Math.random()` · `String.includes()` · `String.charAt()`

### Ejercicio 12: ¿Es un palíndromo?

Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda, ignorando mayúsculas, espacios y signos de puntuación.

Pide al usuario que introduzca una cadena y comprueba si es un palíndromo. Muestra el resultado.

Ejemplos de palíndromos: `"Ana"`, `"Amor, Roma"`, `"race car"`, `"Ana lleva al oso la avellana"`.

**Pista:** limpia primero la cadena (minúsculas, sin espacios ni signos) y luego compárala con su versión invertida.  
**Documentación:** `String.toLowerCase()` · `String.replace()` · `Array.reverse()`

### Ejercicio 13: Contar palabras

Ve a [lipsum.com](https://www.lipsum.com/) y genera 3 párrafos de texto.
Guarda ese texto en una variable string dentro de tu código.

Escribe un programa que:

1. Cuente el número total de palabras.
2. Cuente cuántas veces aparece la palabra `"et"` en el texto.

**Pista:** busca cómo dividir un string en un array de palabras.  
**Documentación:** `String.split()` · `Array.length` · `Array.filter()`

### Kata: Crecimiento de población _(CodeWars)_

En una pequeña ciudad la población es `p0 = 1000` habitantes. La tasa de crecimiento anual es del 2% (`r = 0.02`) y llegan `aug = 50` nuevos habitantes cada año.

Escribe una función que calcule cuántos años tardaría la ciudad en alcanzar o superar una población de `p = 1200` habitantes.

El resultado para este caso es `3` años.

**Pista:** este es un problema de bucle donde la condición de parada es alcanzar la población objetivo. Piensa qué operación se repite en cada iteración.

## Referencia rápida de documentación

- [JavaScript — MDN (español)](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [prompt() — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)
- [alert() — MDN](https://developer.mozilla.org/es/docs/Web/API/Window/alert)
- [String — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Math — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Bucle for — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for)
- [if...else — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)