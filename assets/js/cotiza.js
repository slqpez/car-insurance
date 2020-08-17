import { Interfaz } from "./interfaz.js";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const test = new Interfaz();
  test.mostrarMsg();
  e.preventDefault();
});
