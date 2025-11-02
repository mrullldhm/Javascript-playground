let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

let max = Math.max(...numbers);
console.log(max);
let min = Math.min(...numbers);
console.log(min);

let username = "Amirul Adham";
let letter = [...username].join("-");
console.log(letter);

fruits = ["orange", "apple", "mango"];
vegetables = ["tomato", "carrot", "brocolli"];
foods = [...fruits, ...vegetables, "egg", "milk"];
console.log(foods);
