// ### Ejercicio 13: Contar palabras

// Ve a [lipsum.com](https://www.lipsum.com/) y genera 3 párrafos de texto.
// Guarda ese texto en una variable string dentro de tu código.

// Escribe un programa que:

// 1. Cuente el número total de palabras.
// 2. Cuente cuántas veces aparece la palabra `"et"` en el texto.

// **Pista:** busca cómo dividir un string en un array de palabras.
// **Documentación:** `String.split()` · `Array.length` · `Array.filter()`

let texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis dui et diam fringilla feugiat vitae aliquam lacus. Nullam sapien leo, maximus id placerat sit amet, auctor sit amet mauris. Ut tristique enim sed lacinia blandit. Ut vestibulum laoreet facilisis. Cras feugiat justo in neque pellentesque convallis nec nec ligula. Etiam lobortis lacus sed tortor cursus, ut luctus libero vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum nunc, elementum ac augue quis, lacinia pellentesque augue. Aliquam a venenatis mi. Sed eu dapibus justo, vitae venenatis felis. Nullam orci neque, porta a sem vel, venenatis vestibulum lectus. Curabitur ornare magna in nibh condimentum aliquam at a felis. Pellentesque nunc mi, semper vitae purus quis, mattis lacinia turpis. Aliquam nec nulla id ipsum facilisis efficitur vel a orci.

In vitae tincidunt quam. Sed accumsan nunc ac semper commodo. Vivamus at diam ipsum. Morbi eu dictum nisi. Curabitur nec porttitor nisl, non convallis ipsum. Nullam vel tristique urna. Nunc eu mattis nunc, nec luctus arcu. Proin sagittis in sem id cursus. Nulla facilisi. Fusce ullamcorper, nulla in ultrices rhoncus, ipsum purus posuere arcu, tempus aliquet risus dolor vitae eros. Curabitur risus enim, facilisis non augue sit amet, condimentum pulvinar mi.

Sed sagittis odio erat, non convallis turpis lobortis nec. Mauris tortor purus, auctor eget nibh eget, dignissim condimentum tortor. Sed fringilla rhoncus egestas. Nunc laoreet ipsum id sem mollis pulvinar. Fusce elementum ex nec lacus sagittis, sed efficitur justo suscipit. Etiam sed purus sed ipsum aliquam commodo. Phasellus diam sem, faucibus at mi a, ornare venenatis ligula. Cras porta, ex ut suscipit semper, tellus est egestas orci, a dictum nunc augue nec tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut viverra nisi fermentum, congue dui vel, rutrum massa. Integer volutpat convallis ligula, nec pellentesque dui blandit vitae. Et.`;

texto = texto
   .replaceAll(",", "")
   .replaceAll(".", "")
   .replaceAll("\n\n", " ")
   .split(" ");
console.log(texto.length);
console.log(texto.filter((word) => word.toLowerCase() === "et").length);
