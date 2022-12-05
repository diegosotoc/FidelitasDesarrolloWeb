// Ejercicio 1

var precio = prompt("Ingrese el precio del producto");
var descuento = 0
var precioFinal = 0

function calcularPrecio(precio) {
  if (precio >= 10000 || precio <= 20000) {
    descuento = precio * 0.05;
    precioFinal = precio - descuento;
  }

  if (precio >= 20001 || precio <= 30000) {
    descuento = precio * 0.10;
    precioFinal = precio - descuento;
  }

  if (precio >= 30001) {
    descuento = precio * 0.15;
    precioFinal = precio - descuento;
  }

  if (precio < 10000) {
    precioFinal = precio
  }

  return precioFinal
}

document.write("El precio final del producto es: " + calcularPrecio(precio));


// Ejercicio 2

var numero = parseInt(prompt("Ingrese un numero"));

if (numero === 10) {
  document.write(`El número ${numero} es igual a 10.`)
} else if (numero > 10) {
  document.write(`El número ${numero} mayor a 10.`)
} else {
  if (numero % 2 !== 0 && numero < 10) {
    document.write(`El número ${numero} es un número impar menor a 10.`);
  } else {
    document.write(`El número ${numero} es un número par menor a 10.`);
  }
}

// Ejercicio 3

var pesoAve = parseFloat(prompt("Ingrese un numero"));

if (pesoAve >= 0 && pesoAve <= 2) {
  document.write(`El peso de la ave es bajo`);
}
if (pesoAve > 2.01 && pesoAve <= 2.75) {
  document.write(`El peso de la ave es medio`);
}

if (pesoAve > 2.75) {
  document.write(`El peso de la ave es alto`);
}