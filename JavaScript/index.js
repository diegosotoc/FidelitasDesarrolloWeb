// Calculadora
function restar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let suma = Number(num1) - Number(num2);
  document.getElementById('resultado').innerHTML = `<h3 >Resultado = ${suma}</h3>`
}

function sumar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let suma = Number(num1) + Number(num2);
  document.getElementById('resultado').innerHTML = `<h3 >Resultado = ${suma}</h3>`
}

function multiplicar() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let suma = Number(num1) * Number(num2);
  document.getElementById('resultado').innerHTML = `<h3 >Resultado = ${suma}</h3>`
}

function dividir() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let suma = Number(num1) / Number(num2);
  document.getElementById('resultado').innerHTML = `<h3 >Resultado = ${suma}</h3>`
}

// Datos personales
function datosPersonales() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  document.getElementById('datos-personales').innerHTML = `<h3>Su nombre es = ${nombre} ${apellido}</h3>`
}
// Producto
function calcularPrecio() {
  let cantidadProducto = document.getElementById("cantidad-producto").value;
  let precioProducto = document.getElementById("precio-producto").value;
  let nombreProducto = document.getElementById("nombre-producto").value;

  let suma = Number(cantidadProducto) * Number(precioProducto);

  document.getElementById('resultado-producto').innerHTML = `<h3>El total a pagar por ${nombreProducto} es ${suma}</h3>`
}
