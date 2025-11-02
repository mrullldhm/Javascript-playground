function happyBirthday(name, age) {
  console.log("Happy Birthday To YOU");
  console.log("Happy Birthday To YOU");
  console.log(`Happy Birthday To ${name}`);
  console.log("Happy Birthday To YOU");
  console.log(`Happy Birthday ${age} Years Old`);
}
happyBirthday("amirul", 31);



function add(x, y) {
  return x + y;
}
console.log(add(3, 2));
function subtract(x, y) {
  return x - y;
}
console.log(subtract(5, 1));
function multiply(x, y) {
  return x * y;
}
console.log(multiply(3, 5));
function divide(x, y) {
  return x / y;
}
console.log(divide(65, 5));



function isEven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is an even number`);
    return true;
  } else {
    console.log(`${number} is an odd number`);
    return false;
  }
}
console.log(isEven(4));

function isOdd(number) {
  let result = number % 2 === 0 ? "even" : "odd";
  console.log(`${number} is an ${result} number`);
  return number % 2 !== 0;
}
console.log(isOdd(3));



function validEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(validEmail("mrullldhm@gmail.com"));
