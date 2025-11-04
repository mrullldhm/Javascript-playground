// eventListener = Listen for specific events to create interactive web pages
//                 Events: click, mouseover, mouseou
//                 .addEventListener(event, callback/function)

// Example 1
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", function (event) {
  event.target.style.background = "red";
  event.target.textContent = "You Clicked Me 😁";
});

// Example 2
myBox.addEventListener("mouseover", function (event) {
  event.target.style.background = "yellow";
  event.target.textContent = "You Touched Me 😁";
});

// Example 3
myBox.addEventListener("mouseout", function (event) {
  event.target.style.background = "green";
  event.target.textContent = "Click Me 😁";
});

// Example 4

myButton.addEventListener("click", function () {
  myBox.style.background = "red";
  myBox.textContent = "You Clicked Me 😁";
});

myButton.addEventListener("mouseover", function () {
  myBox.style.background = "yellow";
  myBox.textContent = "You Touched Me 😁";
});

myButton.addEventListener("mouseout", function () {
  myBox.style.background = "green";
  myBox.textContent = "Click Me 😁";
});
