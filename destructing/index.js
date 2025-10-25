// Destructing = Extract values from objects & arrays
//               Then assign it to variables in a convenient way
//               [] = to perform array destructing
//               {} = to perform object destructing

// Example 1
// Swap the value of 2 variables
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

// Example 2
// Swap 2 elements in an array
let colors = ["red", "blue", "green"];
[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors);

// Example 3
// Assign array element to array
let colors2 = ["yellow", "blue", "black", "purple", "red"];
let [first, second, third, ...extra] = colors2;
console.log(first);
console.log(second);
console.log(third);
console.log(extra);

// Example 4
// Extract values from object
const person1 = {
  firstName: "Amirul",
  lastName: "Adham",
  age: 31,
  job: "Developer",
};

const person2 = {
  firstName: "Muhammad",
  lastName: "Ali",
  age: 20,
};

const { firstName, lastName, age, job = "Unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Example 5
// Destructure in function parameters
function displayPerson({ firstName, lastName, age, job }) {
  console.log(
    `My name is ${firstName} ${lastName} and my age is ${age} and Im work as a ${job}`
  );
}

displayPerson(person1);
