//Funciones para cambiar el texto de una etiqueta HTML con JavaScript
function cambiarTexto() {
  document.getElementById("demo").innerHTML = "Texto cambiado por JavaScript";
}

function volverTexto() {
  document.getElementById("demo").innerHTML = "Texto Original";
}
//fin de las funciones para cambiar el texto de una etiqueta HTML

//funciones para cambiar el estilo de una etiqueta HTML con JavaScript
function cambiarSize() {
  document.getElementById("estilo").style.fontSize = "35px";
  document.getElementById("estilo").innerHTML = "Texto cambiado a 35px";
}

function regresarSize() {
  document.getElementById("estilo").style.fontSize = "";
  document.getElementById("estilo").innerHTML = "Texto con su tamaño Original";
}
//fin de las funciones para cambiar el estilo de una etiqueta HTML con JavaScript

//funciones para encender y apagar un bombillo con Javascript
function onLight() {
  document.getElementById("imagen").src = "img/on.gif";
}

function offLight() {
  document.getElementById("imagen").src = "img/off.gif";
}
//fin funciones para encender y apagar un bombillo con JavaScript

//funciones para ocultar y mostrar un texto y una imagen con JavaScript
function ocultarEtiqueta() {
  document.getElementById("despliegue").style.display = "none";
}

function mostrarEtiqueta() {
  document.getElementById("despliegue").style.display = "block";
}
//fin funciones para ocultar y mostrar un texto y una imagen con JavaScript
