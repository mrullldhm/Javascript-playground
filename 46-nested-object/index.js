// Nested Objet = Objects inside of other Objects
//                Allows us to represent more complex data structure
//                Child Object is enclosed by a Parent Object

//                Person {Address{}, ContactInfo{}}
//                ShoppingChart {Keyboard{}, Mouse{}, Monitor{}}

// Example 1
const person = {
  fullName: "Amirul Adham",
  age: 31,
  isStudent: false,
  hobbies: ["running", "codding", "sleeping"],
  address: {
    street: "Felda Trolak",
    city: "Sungkai",
    country: "Malaysia",
  },
};

console.log(person.hobbies[0]);
console.log(person.address.street);

for (const property in person.address) {
  console.log(person.address[property]);
}

// Example 2
class Person {
  constructor(myName, myAge, ...myAddress) {
    this.myName = myName;
    this.myAge = myAge;
    this.myAddress = new Address(...myAddress);
  }
}

class Address {
  constructor(myStreet, myCity, myCountry) {
    this.myStreet = myStreet;
    this.myCity = myCity;
    this.myCountry = myCountry;
  }
}

const person1 = new Person("Amirul", 31, "Sungkai", "Perak", "Malaysia");
console.log(person1);
console.log(person1.myName);
console.log(person1.myAge);
console.log(person1.myAddress);
console.log(person1.myAddress.myStreet);
console.log(person1.myAddress.myCity);
console.log(person1.myAddress.myCountry);
