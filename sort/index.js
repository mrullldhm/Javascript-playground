// sort() = Method used to sort elements of an array in place
//          Sorts element as strings in lexicographic order, not alphabetical
//          Lexicographic = (alphabet + numbers + symbols) as strings

// Example 1
let fruits = ["apple", "orange", "lemon", "banana", "coconut"];
fruits.sort();
console.log(fruits);

// Example 2
let numbers = [2, 3, 4, 1, 5, 8, 6, 7, 10, 9];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Example 3
let peoples = [
  { name: "Amirul", age: 31, gpa: 3.2 },
  { name: "Adham", age: 23, gpa: 2.2 },
  { name: "Abu", age: 14, gpa: 1.2 },
  { name: "Ali", age: 43, gpa: 3.9 },
];
peoples.sort((a, b) => a.name.localeCompare(b.name));
console.log(peoples);
peoples.sort((a, b) => a.age - b.age);
console.log(peoples);
