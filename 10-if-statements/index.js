// Boolean
let student = true;

if (student) {
  console.log("You are a student");
} else {
  console.log("You are not a student");
}

// Boolean + Number + Nested
let age = 111;
let haveVehicle = false;

if (age >= 18) {
  console.log("You are eligible to drive");

  if (haveVehicle) {
    console.log("You should take a license");
  } else {
    console.log("Go save money and bought the vehicle");
  }
} else if (age < 0) {
  console.log("Your age cannot be below 0");
} else {
  console.log("You are not eligible to take a license");
}

// Project
input = document.getElementById("myInput");
result = document.getElementById("myStatus");
submit = document.getElementById("mySubmit");

submit.onclick = function () {
  age = input.value;
  if (age < 18) {
    result.textContent = "You are not eligible for MyKasih";
  } else if (age >= 18) {
    result.textContent = "You are eligible for MyKasih";
  }
};
