function Interfaz() {
  this.models;
  this.year;
  this.type;
}

const typeS = document.querySelectorAll("input[name='type-s']");

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
