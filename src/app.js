/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let body = document.querySelector(".cuerpo");
  body.style.background = "green";

  let numbers = document.querySelector(".numeros");
  numbers.innerHTML = cartas();

  const sign = pokerCards();

  const signUp = document.querySelector(".up");
  signUp.innerHTML = sign;

  const signDown = document.querySelector(".down");
  signDown.innerHTML = sign;

  if (sign == "♦" || sign == "♥") {
    signUp.style.color = "red";
    signDown.style.color = "red";
    numbers.style.color = "red";
  }

  const button = document.querySelector("#press");
  button.addEventListener("click", event => {
    let sign2 = pokerCards();
    signUp.textContent = sign2;
    signDown.textContent = sign2;
    numbers.textContent = cartas();

    if (sign2 == "♦" || sign2 == "♥") {
      signUp.style.color = "red";
      signDown.style.color = "red";
      numbers.style.color = "red";
    } else {
      signUp.style.color = "black";
      signDown.style.color = "black";
      numbers.style.color = "black";
    }
  });
};

let cartas = () => {
  let numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let aletorionumeros = Math.floor(Math.random() * numeros.length);
  return `${numeros[aletorionumeros]}`;
};

let pokerCards = () => {
  const signos = ["♦", "♥", "♠", "♣"];
  const aleatoriosignos = Math.floor(Math.random() * signos.length);

  return `${signos[aleatoriosignos]}`;
};
