/**
  1. Declarar una variable llamada `noValgoNi5` y asignarle el valor `4`. 
  Mostrar el valor de la variable por la terminal.
  2. Declarar 3 variables:

      * `miAnoDeNacimiento` y asignarle el valor de tu año de nacimiento.
      * `meGustariaTener80Anos` y asignarle el número `80`.
      * `voyATener80ElAno` y asignarle el resultado de sumar las 2 variables anteriores

      Mostrar por la terminal el año en el que vas a cumplir 80 años.
  3. Declarar 3 variables:

      * `costoDeUnaTele` y asignarle el valor `10000`.
      * `ahorros` y asignarle el valor `9000`.
      * `dineroQueMeFalta` y asignarle el resultado de restar las 2 variables anteriores.

      Mostrar por la terminal cuanto dinero te falta para comprar la tele.
  4. Declarar 3 variables:

      * `diasPorAno` y asignarle el número `365`
      * `cantidadDeAnosEnUnaDecada` y asignarle el número `10`
      * `cantidadDeDiasEnUnaDecada` y asignarle el resultado de multiplicar las 2 variables anteriores.

      Mostrar por la terminal cuantos días hay en una década.
  5. Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas tengo en la mesa si conté 24 porciones.

      Preguntas que te deberías hacer para resolver este ejercicio: ¿Qué números menciona el enunciado?, ¿Los puedo guardar en variables?, ¿Qué cuenta puedo hacer para obtener el resultado?
  6. Declarar una variable de nombre `miAnimalFavorito` y asignarle como valor el string que represente el animal que más te gusta.
   Escribir el código necesario para mostrar por la terminal el valor `true` si el animal que más te gusta es un `'perro'`. De lo contrario, mostrar `false`. Usar el operador de igualdad (`==`).
  7. Usar el operador de desigualdad (`!=`) para mostrar por la terminal el resultado de comparar la cadena de caracteres `'flan'` y `'flan con dulce de leche'` (Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).
  8. Declarar una variable llamada `soyMayorDeEdad` y asignarle el resultado de comparar tu edad y el número `17` usando el operador `>` (mayor). Mostrar el valor de la variable por la terminal.
  9. Declarar una variable llamada `soyMenorDe25` y asignarle el resultado de comparar tu edad y el número `25` usando el operador `<` (menor). Mostrar el valor de la variable por la terminal.
  10. Declarar una variable llamada `estamosEnEnero` y asignarle el resultado de comparar si el nombre del mes actual es igual a `'Enero'`. Hacerlo usando el operador de igualdad estricta (`===`). Mostrar el valor de la variable por la terminal.
  11. Declarar una variable llamada `noEstamosEnEnero` y asignarle el resultado de comparar si el nombre del mes actual y el string `'Enero'` son diferentes. Hacerlo usando el operador de desigualdad estricta (`!==`). Mostrar el valor de la variable por la terminal.
  12. Declarar 3 variables:

      * `miNotaEnElParcial` y asignarle un `8`
      * `notaMinimaParaAprobar` y asignarle un `6`
      * `estoyAprobado` y asignarle el resultado de comparar el número las dos variables anteriores usando el operador `>=` (Mayor o igual).

      Mostrar el valor de la variable `estoyAprobado` por la terminal.
  13. Declarar una variable llamada `esHoraDeAlmorzar` cuyo valor sea el resultado de comparar con el operador `<=` (Menor o igual) si la hora actual es menor o igual a `12`. Mostrar el valor por la terminal.
*/

let noValgoNi5 = 4;
console.log(noValgoNi5);

let miAnoDeNacimiento = 1988;
let meGustariaTener80Anos = 80;
let voyATener80ElAno = miAnoDeNacimiento + meGustariaTener80Anos;

console.log("Año: " + voyATener80ElAno);

let costoDeUnaTele = 10000;
let ahorros = 9000;
let dineroQueMeFalta = costoDeUnaTele - ahorros;

console.log("Me falta " + dineroQueMeFalta + " para comprar la tele");

let diasPorAno = 365;
let cantidadDeAnosEnUnaDecada = 10;
let cantidadDeDiasEnUnaDecada = diasPorAno * cantidadDeAnosEnUnaDecada;

console.log("Días en una decada " + cantidadDeDiasEnUnaDecada);

let cantidadPizzas = 24 / 8;

console.log(cantidadPizzas);

let miAnimalFavorito = "leon" == "perro";

console.log(miAnimalFavorito);

let sonDistintos = "flan" != "flan con dulce de leche";

console.log("Son distintos " + sonDistintos);

let soyMayorDeEdad = 30 > 17;

console.log("soy mayor " + soyMayorDeEdad);
//9
let soyMenorDe25 = 30 < 25;

console.log("soy menor " + soyMenorDe25);

//10
let estamosEnEnero = "Enero" === "Junio";

console.log(estamosEnEnero);

//11
let noEstamosEnEnero = "Enero" !== "Junio";

console.log(noEstamosEnEnero);

//12
let miNotaEnElParcial = 8;
let notaMinimaParaAprobar = 6;

if (miNotaEnElParcial >= notaMinimaParaAprobar) {
  console.log("estas aprobado " + miNotaEnElParcial);
}

let esHoraDeAlmorzar = 16;

if (esHoraDeAlmorzar <= 12) {
  console.log(esHoraDeAlmorzar);
} else {
}
