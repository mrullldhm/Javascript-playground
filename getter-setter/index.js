// Getter = Special method that makes a property readable
// Setter = Special method that makes a property writeable
// Validate and modify a value when reading/writing a property

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error(`The  width must be a positive number`);
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("The height must be a positive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._height * this._width;
  }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
//
//
//
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirst) {
    if (typeof newFirst === "string" && newFirst.length > 0) {
      return (this._firstName = newFirst);
    } else {
      console.error(`The First Name must be a non-empty string`);
    }
  }

  set lastName(newLast) {
    if (typeof newLast === "string" && newLast.length > 0) {
      return (this._lastName = newLast);
    } else {
      console.error(`The Last Name must be a non-empty string`);
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      return (this._age = newAge);
    } else {
      console.error(`The age must be a positive number`);
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

const person1 = new Person("Amirul", "Adham", 21);
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);
