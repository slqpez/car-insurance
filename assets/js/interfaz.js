function Interfaz() {
  this.model;
  this.year;
  this.typeS;
}

Interfaz.prototype.showMsg = function (msg, classMsg) {
  const form = document.querySelector("form");
  if (!document.querySelector("form div")) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(classMsg);
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

Interfaz.prototype.generateQuot = function () {
  if (this.isComplete()) {
    console.log("Nueva cotización");
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
