let a = 5;
let b = 10;
let c = a + b;
console.log(`La suma de a y b es: ${c}`);

let nombre = prompt("¿Cuál es tu nombre?");
console.log(`Hola, ${nombre}!`);

let num1 = 7,
  num2 = 14,
  num3 = 10;
let mayor = Math.max(num1, num2, num3);
console.log(`El mayor de los tres números es: ${mayor}`);

let numeroIngresado = prompt("Ingresa un numero y te dire si es par o impar");

let mensaje =
  numeroIngresado % 2 === 0
    ? `El número ${numeroIngresado}, es par`
    : `El número ${numeroIngresado}, es impar`;
console.log(mensaje);

console.log("ejercicio 3");

let cuentaAtras = 10;
while (cuentaAtras > 0) {
  console.log(cuentaAtras);
  cuentaAtras--;
}

let numero;
do {
  numero = prompt("Ingresa un número mayor a 100:");
} while (numero <= 100);
console.log(`Ingresaste un número mayor a 100: ${numero}`);

function esPar(numero) {
  return numero % 2 === 0;
}
console.log(`El número 8 es par: ${esPar(8)}`);
console.log(`El número 7 es par: ${esPar(7)}`);

function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log(`30°C son equivalentes a ${convertirCelsiusAFahrenheit(30)}°F`);

let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  },
};
persona.cambiarCiudad("Barcelona");
console.log(
  `Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`
);
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  esAntiguo: function () {
    let añosDesdePublicacion = new Date().getFullYear() - this.año;
    return añosDesdePublicacion > 10;
  },
};
console.log(`El libro "${libro.titulo}" es antiguo: ${libro.esAntiguo()}`);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = numeros.map((numero) => numero * 2);
console.log(`Números originales: ${numeros}`);
console.log(`Números multiplicados por 2: ${numerosMultiplicados}`);

let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log(`Primeros 10 números pares: ${pares}`);

function cambiarColorParrafos() {
  let parrafos = document.querySelectorAll("p");
  console.log("hola");
  parrafos.forEach((parrafo) => {
    parrafo.style.color = "blue";
  });
}
function submitForm(event) {
  event.preventDefault();

  let textoIngresado = document.getElementById("textoInput").value;
  alert(`Has ingresado: ${textoIngresado}`);
}

document.querySelectorAll("#lista li").forEach((item) => {
  item.addEventListener("click", function () {
    console.log(this.textContent);
  });
});

function deshabilitarCampo() {
  document.getElementById("campoTexto").disabled = true;
}

function habilitarCampo() {
  document.getElementById("campoTexto").disabled = false;
}

function guardarCorreo(event) {
  event.preventDefault();

  const correo = document.getElementById("correo").value;
  localStorage.setItem("correoGuardado", correo);
  mostrarCorreoGuardado();
}
function mostrarCorreoGuardado() {
  const correo = localStorage.getItem("correoGuardado");
  const mostrarCorreoDiv = document.getElementById("mostrarCorreo");
  const botonEliminar = document.getElementById("eliminarCorreo");

  if (correo) {
    mostrarCorreoDiv.textContent = `Correo guardado: ${correo}`;
    botonEliminar.style.display = "block";
  } else {
    mostrarCorreoDiv.textContent = "";
    botonEliminar.style.display = "none";
  }
}

function eliminarCorreo() {
  localStorage.removeItem("correoGuardado");
  mostrarCorreoGuardado();
}

mostrarCorreoGuardado();
