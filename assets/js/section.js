const selectYear = document.querySelector("#year");
const fecha = new Date();
let año = fecha.getFullYear();

for (let i = año; i >= 1999; i--) {
  selectYear.innerHTML += `<option value="${i}">${i}</option>`;
}
