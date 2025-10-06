let userName = "   Kingg Tupa   ";

console.log(userName.charAt(3));
console.log(userName.indexOf("g"));
console.log(userName.lastIndexOf("g"));
console.log(userName.length);

console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));

let result = userName.startsWith(" ");
console.log(result);
if (result) {
  console.log("Your result start with a space");
} else {
  console.log("Your result not start wih a space");
}
let result1 = userName.endsWith(" ");
console.log(result1);
if (result1) {
  console.log("Your result end with a space");
} else {
  console.log("Your result not end wih a space");
}
let result2 = userName.includes(" ");
console.log(result2);
if (result2) {
  console.log("Your result include a space");
} else {
  console.log("Your result not include a space");
}

let phone = "013-294-3132";
console.log(phone);
phone = phone.replaceAll("-", "");
console.log(phone);
let phone1 = "013-294-3132";
console.log(phone1);
phone1 = phone1.padStart("20", "0");
console.log(phone1);
let phone2 = "013-294-3132";
console.log(phone2);
phone2 = phone2.padEnd("20", "0");
console.log(phone2);
