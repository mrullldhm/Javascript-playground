let numbers = [1, 2, 3, 4, 5];

function display(element) {
  console.log(element);
}
numbers.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
  console.log(array[index]);
}
numbers.forEach(double);

let fruits = ["apple", "orange", "banana", "coconut"];

function display(element) {
  console.log(element);
}
fruits.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
  console.log(array[index]);
}
fruits.forEach(upperCase);

function capitalize(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  console.log(array[index]);
}
fruits.forEach(capitalize);
