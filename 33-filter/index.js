// .filter() = creates a new array by filtering out elements

const numbers = [1, 2, 3, 4, 5, 6, 7];

function filterEven(element) {
  return element % 2 === 0;
}

const even = numbers.filter(filterEven);
console.log(even);

function filterOdd(element) {
  return element % 2 !== 0;
}

const odd = numbers.filter(filterOdd);
console.log(odd);
//
//
//
const age = [16, 17, 18, 19, 20, 60];

function underAge(element) {
  return element <= 18;
}

const under18 = age.filter(underAge);
console.log(under18);

function aboveAge(element) {
  return element > 18;
}

const above18 = age.filter(aboveAge);
console.log(above18);
//
//
//
const fruits = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function words(elements) {
  return elements.length <= 6;
}

const wordsSix = fruits.filter(words);
console.log(wordsSix);
