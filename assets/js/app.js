import "./section.js";
import { Interfaz } from "./interface.js";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const test = new Interfaz();
  test.generateQuot();
  e.preventDefault();
});
