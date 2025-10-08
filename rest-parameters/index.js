let food1 = "pizza";
let food2 = "hotdog";
let food3 = "burger";
let food4 = "sushi";

function menu(...foods) {
  console.log(foods);
}
menu(food1, food2, food3, food4);

function fridge(...foods) {
  return foods;
}
insideFridge = fridge(food1, food2, food3, food4);
console.log(insideFridge);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const totalOfSum = sum(2, 3, 4);
console.log(totalOfSum);

function average(...numbers) {
  result = 0;
  for (number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
const totalOfAverage = average(4, 3, 3, 3, 7);
console.log(totalOfAverage);

function combineName(...strings) {
  return strings.join(" ");
}
let fullName = combineName("Muhamad", "Amirul", "Adham");
console.log(fullName);
