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

export { Interfaz };

Interfaz.prototype.mostrarMsg = function () {
  const form = document.querySelector("form");
  const datos = this.recolectarDatos();
  for (let i = 0; i <= datos.length; i++) {
    if (datos[i] === undefined) {
      console.log("hey");
      break;
    } else console.log("no");
  }
};

/* TODO Hacer el ciclo para mostrar el mensaje de error. */
