const modelo = document.querySelector("#models");
const modelInput = document.querySelector("#model-input");

const arreglo = Array.from(modelo.children);

modelo.addEventListener("click", selectedOption);

function selectedOption(e) {
  arreglo.forEach((option) => {
    if (option.value !== "defaulto") {
      if (option.selected) {
        let text = option.text;
        modelInput.style.display = "block";
        modelInput.value = text;
      }
    }
  });
}
