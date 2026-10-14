/**
 * Practica Semana 9 - Sesion 1
 * JavaScript: tipos, operadores y estructura de un programa
 * 
 * Funciones implementadas para interactividad con el DOM y calculos basicos.
 */

/**
 * Muestra una alerta con el nombre ingresado en el formulario.
 * @param {HTMLInputElement|string} txtNombre - Elemento input o valor directo del campo nombre
 */
function muestra(txtNombre) {
  // Obtenemos el valor del input recibido como parametro
  var nombre = "";

  if (typeof txtNombre === "string") {
    nombre = txtNombre;
  } else if (txtNombre && txtNombre.value !== undefined) {
    nombre = txtNombre.value.trim();
  } else {
    // Respaldo por si se llama sin argumentos buscando el elemento por ID o name
    var inputElem = document.getElementById("cnombre") || document.querySelector('input[name="cnombre"]');
    nombre = inputElem ? inputElem.value.trim() : "";
  }

  if (nombre === "") {
    alert("Por favor, ingrese un nombre antes de comprobar.");
    return;
  }

  // Notificacion al usuario segun la guia
  alert("Eres " + nombre);
}

/**
 * Transfiere el texto ingresado en el campo de contrasena al campo visible en tiempo real.
 * @param {HTMLInputElement} txtSecreto - Campo de tipo password
 * @param {HTMLInputElement} txtNormal - Campo de tipo texto donde se replica el contenido
 */
function pasa(txtSecreto, txtNormal) {
  var temporal;

  // Verificamos si los parametros son elementos directos o cadenas con identificadores
  var elementoOrigen = (typeof txtSecreto === "string") 
    ? document.querySelector('input[name="' + txtSecreto + '"]') || document.getElementById(txtSecreto)
    : txtSecreto;

  var elementoDestino = (typeof txtNormal === "string")
    ? document.querySelector('input[name="' + txtNormal + '"]') || document.getElementById(txtNormal)
    : txtNormal;

  if (elementoOrigen && elementoDestino) {
    temporal = elementoOrigen.value;
    elementoDestino.value = temporal;
  }
}

/**
 * Realiza el calculo del area del triangulo a partir de la base y la altura.
 * Formula: Area = 0.5 * base * altura
 */
function calcularArea() {
  // 1. Obtencion de los elementos del DOM mediante su ID
  var inputBase = document.getElementById("base");
  var inputAltura = document.getElementById("altura");
  var elementoResultado = document.getElementById("resultado");

  if (!inputBase || !inputAltura) {
    console.error("No se encontraron los campos de base o altura en el documento.");
    return;
  }

  // 2. Parseo de datos: conversion de cadenas a numeros con decimales (punto flotante)
  var base = parseFloat(inputBase.value);
  var altura = parseFloat(inputAltura.value);

  // Validacion de entrada para evitar resultados indefinidos o NaN
  if (isNaN(base) || isNaN(altura)) {
    var mensajeError = "Ingrese valores numericos validos para la base y la altura.";
    if (elementoResultado) {
      elementoResultado.textContent = mensajeError;
    }
    alert(mensajeError);
    return;
  }

  if (base <= 0 || altura <= 0) {
    var mensajeAdvertencia = "La base y la altura deben ser valores mayores a cero.";
    if (elementoResultado) {
      elementoResultado.textContent = mensajeAdvertencia;
    }
    alert(mensajeAdvertencia);
    return;
  }

  // 3. Calculo del area empleando la formula indicada en la guia
  var area = 0.5 * base * altura;

  // 4. Actualizacion del contenido en la pagina web mediante manipulacion del DOM
  if (elementoResultado) {
    elementoResultado.textContent = "El area del triangulo es: " + area;
  }

  // 5. Alerta al usuario requerida en la guia
  alert("El area es " + area);
}
