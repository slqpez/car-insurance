function Interfaz() {
  this.models;
  this.year;
  this.type;
}

Interfaz.prototype.recolectarDatos = function () {
  const model = document.querySelector("#models");
  const year = document.querySelector("#year");
  const typeS = document.querySelectorAll("input[name='type-s']");
  if (
    model.options[model.selectedIndex].value !== "defaulto" &&
    year.options[year.selectedIndex].value !== "defaulto"
  ) {
    this.models = model.options[model.selectedIndex].value;
    this.year = year.options[year.selectedIndex].value;
  }
  const arreglo = Array.from(typeS);
  arreglo.forEach((t) => {
    if (t.checked === true) {
      this.type = t.id;
    }
  });

  return [this.models, this.year, this.type];
};

Interfaz.prototype.isComplete = function () {
  const datos = this.recolectarDatos();
  const data = (currentValue) => currentValue !== undefined;
  const completeData = datos.every(data);
  return completeData;
};
Interfaz.prototype.mostrarMsg = function () {
  const form = document.querySelector("form");

  if (!this.isComplete()) {
    const formChildren = Array.from(form.children);
    formChildren.forEach((children) => {
      if (children.classList.contains("error")) {
        children.style.display = "none";
      }
    });

    const msg = document.createElement("div");
    msg.classList = "error";
    msg.textContent = "Faltan datos. 🙁";
    form.insertBefore(msg, document.querySelector("#models"));

    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  }
};

export { Interfaz };
