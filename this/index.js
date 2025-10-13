// This = Reference to the object where THIS is used
//        The object depend on the immediate context
//        person.name = this.name

const person1 = {
  name: "Spongebob",
  favFood: "Krabby Patty",
  sayHello: function () {
    console.log(`Hi! I am ${this.name}`);
  },
};
person1.sayHello();
