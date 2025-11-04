// eventListener = Listen for specific events to create interactive web pages
//                 Events: keydown, keyup
//                 document.addEventListener(event, callback/function)

// Example 1
document.addEventListener("keydown", (event) => {
  console.log(`Keydown is: ${event.key}`);
});

document.addEventListener("keyup", (event) => {
  console.log(`Keyup is: ${event.key}`);
});

// Example 2
myBox = document.getElementById("myBox");

document.addEventListener("keydown", (event) => {
  myBox.textContent = "You press 😁";
  myBox.style.background = "red";
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "Click Me 😁";
  myBox.style.background = "green";
});

// Example 3
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
