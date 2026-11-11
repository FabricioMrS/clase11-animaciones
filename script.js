// Activa el modo estricto de JavaScript.
"use strict";

// Busca en el HTML el botón, el contenedor, el marcador y el mensaje.
const btn = document.getElementById("run-btn");
const container = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

// Guarda la cantidad de clics y los necesarios para ganar.
let clicks = 0;
const winAt = 3;

// Mueve el botón a una posición aleatoria dentro del contenedor.
function moveButton() {
  // Calcula los límites para que el botón no se salga del contenedor.
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;
  // Elige coordenadas aleatorias dentro de esos límites.
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  // Aplica las nuevas coordenadas al botón.
  btn.style.left = newX + "px";
  btn.style.top = newY + "px";
}

// Mueve el botón cuando el cursor pasa sobre él.
btn.addEventListener("mouseover", moveButton);

// Al hacer clic, aumenta el puntaje y comprueba si se ganó.
btn.addEventListener("click", function () {
  // Suma un clic y actualiza el texto del marcador.
  clicks = clicks + 1;
  scoreDisplay.textContent = "Clicks: " + clicks;
  // Si se alcanzó el puntaje necesario, detiene el movimiento y muestra el mensaje.
  if (clicks >= winAt) {
    btn.removeEventListener("mouseover", moveButton);
    message.textContent = "Well done! You did it!";
  }
});