let fruits = ["apple", "orange", "banana", "coconut"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(`The number of fruits is ${fruits.length}`);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("coconut"));

fruits.push("lemon");
console.log(fruits);
fruits.pop([4]);
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);
fruits.shift([0]);
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(`The fruits in ascending is ${fruits[i]}`);
}
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`The fruit in descending is ${fruits[i]}`);
}

for (let fruit of fruits) {
  console.log(`A shortcut version for ${fruit}`);
}

fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
