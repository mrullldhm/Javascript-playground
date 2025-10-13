// Classes = ES6 features provide a more structured and cleaner way to work with object
//           Compared to traditional constructor function
//           Example: static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  displayProduct() {
    console.log(`Product type ${this.name}`);
    console.log(`Product price $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    let total = this.price + this.price * salesTax;
    console.log(total.toFixed(2));
  }
}

const product1 = new Product("Shirt", 20);

console.log(product1);
console.log(product1.name);
console.log(product1.price);
product1.displayProduct();
product1.calculateTotal(0.1);
