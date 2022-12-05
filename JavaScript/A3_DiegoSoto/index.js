// Ejercicio 1

var angulo1, angulo2, angulo3

for (let i = 0; i < 10; i++) {
  angulo1 = parseInt(prompt("Cuál es la medida del primer ángulo?"))
  angulo2 = parseInt(prompt("Cuál es la medida del segundo ángulo?"))
  angulo3 = parseInt(prompt("Cuál es la medida del tercer ángulo?"))

  if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
    alert("Es un acutángulo")
  }
  if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {
    alert("Es un rectángulo")
  }

  if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    alert("Es un Obtusangulo")
  }
}

// Ejercicio 2

var n = parseInt(prompt("¿cuántas letras desea leer?"));
var letra = '';
var i = 0;
var vocales = 0;
var consonantes = 0;
while (i < n) {
  letra = prompt("Ingrese su letra:");
  letra.toLowerCase();

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vocales++
  } else {
    consonantes++;
  }

  i++;
}

alert(`Cantidad de vocales: ${vocales}. Cantidad de consonantes: ${consonantes}`)



// Ejercicio 3
var array = [];
var num;

for (let i = 0; i < 10; i++) {
  num = parseInt(prompt("Ingresar numero en el array"))
  array[i] = num
}
alert(array.sort(function (a, b) { return b - a }));
alert(array.sort(function (a, b) { return a - b }));


// Ejercicio 4
alert(array.sort(function (a, b) { return a - b }));




