// Inheritance = Allows a new class to inherit properties and method from an existing class (parent -> child)
//               Help with code reusability

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

let rabbit = new Rabbit();
console.log(rabbit);
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

let fish = new Fish();
console.log(fish);
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
