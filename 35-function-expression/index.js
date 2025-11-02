// Function Declaration = Define a reusable block of code that performs a specific task.
//
// Function Expression = A way to define function as values or variable

// Function Declaration
function Hello() {
  console.log("Hello");
}

setTimeout(Hello, 3000);

// Function Expression
const Hello1 = function () {
  console.log("Hello");
};

setTimeout(function Hello() {
  console.log("Hello");
}, 3000);
//
//
//
const numbers = [1, 2, 3, 4, 5, 6];

let squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});
console.log(squares);

let cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});
console.log(cubes);

let even = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(even);

let odd = numbers.filter(function (element) {
  return element % 2 !== 0;
});
console.log(odd);

let sum = numbers.reduce(function (accumulator, element) {
  return accumulator + element;
});
console.log(sum);
