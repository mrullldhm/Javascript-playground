// JSON = Javascript Object Notation, data interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value 1, value 2, value 3]

//        JSON.stringify() = convert a JS object to a JSON string
//        JSON.parse() = convert a JSON string to a JS object

// Example 1
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const jsonString = JSON.stringify(names);
const jsObject = JSON.parse(jsonString);

console.log(names);
console.log(jsonString);
console.log(jsObject);

// ------------------------------------------------------------ //

const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["Jellyfish", "Karate", "Cooking"],
};
const jsonString1 = JSON.stringify(person);
const jsObject1 = JSON.parse(jsonString1);

console.log(person);
console.log(jsonString1);
console.log(jsObject1);

// ------------------------------------------------------------ //

const people = [
  {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Patrick",
    age: 34,
    isEmployed: false,
  },
  {
    name: "Squidward",
    age: 50,
    isEmployed: true,
  },
  {
    name: "Sandy",
    age: 27,
    isEmployed: false,
  },
];

const jsonString2 = JSON.stringify(people);
const jsObject2 = JSON.parse(jsonString2);

console.log(people);
console.log(jsonString2);
console.log(jsObject2);

// Example 2

fetch("names.json")
  .then((response) => response.json())
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.error(err));

fetch("person.json")
  .then((response) => response.json())
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.error(err));

fetch("people.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      console.log(value);
    })
  )
  .catch((err) => console.error(err));
