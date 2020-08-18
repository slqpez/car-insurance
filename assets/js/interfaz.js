function Interfaz() {}

Interfaz.prototype.showMsg = function (msg, classMsg) {
  const form = document.querySelector("form");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(classMsg);
  msgDiv.textContent = msg;
  console.log("buena");
  form.insertBefore(msgDiv, document.querySelector("#models"));
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const test = new Interfaz();
  test.showMsg("Faltan datos.", "error");
  e.preventDefault();
});

export { Interfaz };
