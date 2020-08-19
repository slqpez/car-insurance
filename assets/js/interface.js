import { Quot } from "./quot.js";

function Interfaz() {
  this.model;
  this.year;
  this.typeS;
}

Interfaz.prototype.showMsg = function (msg, classMsg) {
  const form = document.querySelector("form");
  if (!document.querySelector(".to-remove")) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(classMsg, "to-remove");
    msgDiv.textContent = msg;
    form.insertBefore(msgDiv, document.querySelector("#models"));
    setTimeout(() => {
      msgDiv.remove();
    }, 2000);
  }
};

Interfaz.prototype.isComplete = function () {
  const model = this.getModel();
  const year = this.getYear();
  if (model !== "defaulto" && year !== "defaulto") return true;
  else return false;
};

Interfaz.prototype.getModel = function () {
  const selectModel = document.querySelector("#models");
  this.model = selectModel.options[selectModel.selectedIndex].value;

  return this.model;
};

Interfaz.prototype.getYear = function () {
  const selectYear = document.querySelector("#years");
  this.year = selectYear.options[selectYear.selectedIndex].value;
  return this.year;
};

Interfaz.prototype.getType = function () {
  const typeCheckbox = document.querySelector('input[type="radio"]:checked');
  this.typeS = typeCheckbox.value;

  return this.typeS;
};

Interfaz.prototype.createMsg = function (model, year, type, total) {
  const quotDiv = document.createElement("div");
  quotDiv.classList.add("quot-msg");
  quotDiv.innerHTML = `<p>Modelo: ${model}</p>
  <p>Año: ${year}</p>
  <p>Tipo de seguro: ${type}</p>
  <p>Valor total: $${total}</p>`;
  form.insertBefore(quotDiv, document.querySelector(".btn"));
};

Interfaz.prototype.showQuot = function (model, year, type, total) {
  const form = document.querySelector("form");

  if (!document.querySelector(".quot-msg")) {
    setTimeout(() => {
      this.createMsg(model, year, type, total);
    }, 2000);
  } else {
    const exist = document.querySelector(".quot-msg");
    exist.remove();
    setTimeout(() => {
      this.createMsg(model, year, type, total);
    }, 2000);
  }
};

Interfaz.prototype.showSpinner = function () {
  const spinner = document.querySelector("iframe");
  spinner.style.display = "block";
  setTimeout(function () {
    spinner.style.display = "none";
  }, 2000);
};

Interfaz.prototype.generateQuot = function () {
  if (this.isComplete()) {
    this.showSpinner();
    const model = this.getModel();
    const year = this.getYear();
    const typeS = this.getType();
    const quot = new Quot(model, year, typeS);
    const totalValue = quot.getQuot();
    this.showMsg("Cotizando", "complete");
    this.showQuot(model, year, typeS, totalValue);
  } else {
    this.showMsg("Faltan datos.", "error");
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const test = new Interfaz();
  test.generateQuot();
  e.preventDefault();
});

export { Interfaz };
