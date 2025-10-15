// Constructor = Special method for defining the properties and methods of object

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`Your car model is ${this.model}`);
  };
}

const car1 = new Car("Ford", "Mustang", "2025", "Black");

console.log(car1);
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
