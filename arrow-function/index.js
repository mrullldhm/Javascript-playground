// Arrow Function = A conscise way to write function expressions.
//                  Good for simple function that you use only once
//                  (Parameter) => code

// Function Declaratiom
function Hello1() {
  console.log("Hello1");
}
Hello1();

// Function Expression
let Hello2 = function () {
  console.log("Hello2");
};
Hello2();

// Arrow Function
let Hello3 = () => {
  console.log("Hello3");
};
Hello3();

let Hello4 = (name, age) => {
  console.log(`My name is ${name} and ${age} years old`);
};
Hello4("Amirul", 31);
//
//
//
setTimeout(() => {
  console.log(`The countdown is delayed for 3 seconds`);
}, 3000);
//
//
//
numbers = [1, 2, 3, 4, 5, 6];

let square = numbers.map((element) => {
  return Math.pow(element, 2);
});
console.log(square);

let even = numbers.filter((element) => {
  return element % 2 === 0;
});
console.log(even);

let odd = numbers.filter((element) => {
  return element % 2 !== 0;
});
console.log(odd);

let sum = numbers.reduce((accumulator, element) => {
  return accumulator + element;
});
console.log(sum);
