// ### Kata: Crecimiento de población _(CodeWars)_

// En una pequeña ciudad la población es `p0 = 1000` habitantes. La tasa de crecimiento anual es del 2% (`r = 0.02`) y llegan `aug = 50` nuevos habitantes cada año.

// Escribe una función que calcule cuántos años tardaría la ciudad en alcanzar o superar una población de `p = 1200` habitantes.

// El resultado para este caso es `3` años.

// **Pista:** este es un problema de bucle donde la condición de parada es alcanzar la población objetivo. Piensa qué operación se repite en cada iteración.

let p0 = 1000;
let r = 0.02;
let aug = 50;

let p = 1200;
let año = 0;

// while (p0 < p) {
//    p0 += p0 * r + aug;
//    año++;
// }

for (año; p0 < p; año++) {
   p0 += p0 * r + aug;
}

console.log(año + " años");
