const numbers = [1, 2, 3, 4, 5];

function square(element) {
  return Math.pow(element, 2);
}
const squares = numbers.map(square);
console.log(...squares);
//
//
//
const students = ["Spongebob", "Patrick", "Squidwork", "Sandy"];

function upperCase(element) {
  return element.toUpperCase();
}
const studentsUpperCase = students.map(upperCase);
console.log(studentsUpperCase);

function lowerCase(element) {
  return element.toLowerCase();
}
const studentsLowerCase = students.map(lowerCase);
console.log(studentsLowerCase);
//
//
//
const date = ["2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01"];

function formatDate(element) {
  const part = element.split("-");
  return `${part[0]}/${part[1]}/${part[2]}`;
}
const dateNewFormat = date.map(formatDate);
console.log(dateNewFormat);
