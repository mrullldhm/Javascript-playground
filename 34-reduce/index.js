// .reduce() = reduce the elements of an array to a single value

const price = [5, 30, 10, 25, 15, 20];

function sum(accumulator, element) {
  return accumulator + element;
}

let total = price.reduce(sum);
console.log(total);

function max(accumulator, element) {
  return Math.max(accumulator, element);
}

let maxNum = price.reduce(max);
console.log(maxNum);

function min(accumulator, element) {
  return Math.min(accumulator, element);
}

let minNum = price.reduce(min);
console.log(minNum);
