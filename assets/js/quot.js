function Quot(model, year, typeS) {
  this.model = model;
  this.year = year;
  this.typeS = typeS;
  this.base = 2000;
}

Quot.prototype.modelValue = function () {
  if (this.model === "americano") {
    this.base += this.base * 0.1;
  } else if (this.model === "europeo") {
    this.base += this.base * 0.2;
  } else {
    this.base += this.base * 0.3;
  }
};

Quot.prototype.yearValue = function () {
  const diference = new Date().getFullYear() - this.year;
  this.base -= this.base * (0.03 * diference);
};

Quot.prototype.typeValue = function () {
  if (this.typeS === "basic") this.base += this.base * 0.2;
  else this.base += this.base * 0.5;
};

Quot.prototype.getQuot = function () {
  this.modelValue();
  this.yearValue();
  this.typeValue();
  return this.base;
};

export { Quot };
