// Nodelist = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            Nodelist won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButton");
console.log(buttons);

// Add HTML/CSS properties
buttons.forEach((button) => {
  button.style.background = "green";
  button.textContent += "❤️";
});

// Event Listener
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.background = "tomato";
  });
});

// Mouseover + Mouseout Event Listener
buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.background = "hsl(205,100%,40%)";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.background = "green";
  });
});

// Add an Element
const newButton = document.createElement("button");
newButton.textContent = "Button 5❤️";
newButton.classList = "myButton";

document.body.appendChild(newButton);

// Update Nodelist
buttons = document.querySelectorAll(".myButton");
console.log(buttons);

// Remove an Element
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.removeE();

    buttons = document.querySelectorAll(".myButton");
  });
});
