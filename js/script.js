//Funciones para cambiar el texto de una etiqueta HTML con JavaScript
// function cambiarTexto() {
//   document.getElementById("demo").innerHTML = "Texto cambiado por JavaScript";
// }

// function volverTexto() {
//   document.getElementById("demo").innerHTML = "Texto Original";
// }

//fin de las funciones para cambiar el texto de una etiqueta HTML

//funciones para cambiar el estilo de una etiqueta HTML con JavaScript
// function cambiarSize() {
//   document.getElementById("estilo").style.fontSize = "35px";
//   document.getElementById("estilo").innerHTML = "Texto cambiado a 35px";
// }

// function regresarSize() {
//   document.getElementById("estilo").style.fontSize = "";
//   document.getElementById("estilo").innerHTML = "Texto con su tamaño Original";
// }
//fin de las funciones para cambiar el estilo de una etiqueta HTML con JavaScript

//funciones para encender y apagar un bombillo con Javascript
// function onLight() {
//   document.getElementById("imagen").src = "img/on.gif";
// }

// function offLight() {
//   document.getElementById("imagen").src = "img/off.gif";
// }

//fin funciones para encender y apagar un bombillo con JavaScript

//funciones para ocultar y mostrar un texto y una imagen con JavaScript
// function ocultarEtiqueta() {
//   document.getElementById("despliegue").style.display = "none";
// }

// function mostrarEtiqueta() {
//   document.getElementById("despliegue").style.display = "block";
// }
//fin funciones para ocultar y mostrar un texto y una imagen con JavaScript


//funciones optimizadas
function changeText(texto) {
  document.getElementById("demo").innerHTML = texto;
}

//funcion optimizada de cambio de tamaño
function changeSize(fuente, texto) {
  document.getElementById("estilo").innerHTML = texto;
  document.getElementById("estilo").style.fontSize = fuente;
}

//funcion optimizada para encender y apagar un bombillo
function OnOff(rutaImagen) {
  document.getElementById("imagen").src = rutaImagen;
}

//funcion optimizada
function showLabel(texto) {
    document.getElementById('despliegue').style.display = texto;
}
// Estudiar estos dos señores 
// SPRING BOOT
// Node JS
// Principios de Programacion -SOLID