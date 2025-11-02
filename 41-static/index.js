// Static = Keyword that defines properties or method that belong to a class itself
//          Rather than the object created from that class
//          (Class own anything static, not the object)

class Math {
  static PI = 3.142;

  static diameter(radius) {
    return radius * 2;
  }

  static circumference(radius) {
    return 2 * this.PI * radius;
  }

  static area(radius) {
    return this.PI * radius * radius;
  }
}

console.log(Math.PI);
console.log(Math.diameter(4));
console.log(Math.circumference(4));
console.log(Math.area(4));
//
//
//
class User {
  static count = 0;

  constructor(userName) {
    this.userName = userName;
    User.count++;
  }

  static userCount() {
    console.log(`The number of user count is ${User.count}`);
  }

  sayHello() {
    console.log(`Hello my name is ${this.userName}`);
  }
}

let user1 = new User("Ali");
console.log(user1);
console.log(User.count);
user1.sayHello();
User.userCount();

let user2 = new User("Abu");
console.log(user2);
console.log(User.count);
user2.sayHello();
User.userCount();
