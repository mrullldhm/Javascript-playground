// Super = Keyword is used in classes to call the constructor or access the properties and method of parent (Superclass)
//         this = this object
//         super = the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} move at speed ${speed}mph`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    this.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    this.move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    this.move(this.flySpeed);
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
console.log(rabbit);
rabbit.run();

const fish = new Fish("fish", 3, 12);
console.log(rabbit);
fish.swim();

const hawk = new Hawk("hawk", 5, 50);
console.log(rabbit);
hawk.fly();
