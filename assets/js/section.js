const selectYear = document.querySelector("#years");
const fecha = new Date();
let año = fecha.getFullYear();

for (let i = año; i >= 1999; i--) {
  selectYear.innerHTML += `<option value="${i}">${i}</option>`;
}
