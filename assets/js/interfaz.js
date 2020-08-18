function Interfaz() {}

Interfaz.prototype.showMsg = function (msg, classMsg) {
  const form = document.querySelector("form");
  if (document.querySelector("form div") === null) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add(classMsg);
    msgDiv.textContent = msg;
    form.insertBefore(msgDiv, document.querySelector("#models"));
    setTimeout(() => {
      msgDiv.remove();
    }, 2000);
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const test = new Interfaz();
  test.showMsg("Faltan datos.", "error");
  e.preventDefault();
});

export { Interfaz };
