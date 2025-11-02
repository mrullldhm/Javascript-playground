const fruits = [
  { name: "apple", color: "red", calories: 90 },
  { name: "lemon", color: "yellow", calories: 70 },
  { name: "strawberry", color: "pink", calories: 57 },
  { name: "guava", color: "green", calories: 60 },
];
console.log(fruits[0].color);
console.log(fruits[1].color);
console.log(fruits[2].color);
console.log(fruits[3].color);

// push
fruits.push({ name: "grape", color: "purple", calories: 99 });
console.log(fruits);

// forEach
fruits.forEach((fruit) => console.log(fruit.name));

// map
const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);
const fruitColors = fruits.map((fruit) => fruit.color);
console.log(fruitColors);

// filter
const fruitYellow = fruits.filter((fruit) => fruit.color === "yellow");
console.log(fruitYellow);
const fruitLowCal = fruits.filter((fruit) => fruit.calories < 70);
console.log(fruitLowCal);

// reduce
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);
