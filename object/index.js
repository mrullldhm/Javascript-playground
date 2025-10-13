// Object = A collection of related properties and/or method.
//          Can represent real world objects (people, product, places)
//          Object = {
//                      key:value, function()
//                   }

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepant",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi Im Spongebob");
  },
  sayEat: () => {
    console.log("Im eating Krabby Patty");
  },
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.sayEat();

const person2 = {
  firstName: "Patrick",
  lastName: "Starship",
  age: 42,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi Im Patrick");
  },
  sayEat: () => {
    console.log("Im eating Burgrt");
  },
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.sayEat();
