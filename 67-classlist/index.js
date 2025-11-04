// classList = Element property in Javascript used to interact with an element's list of classes(CSS classes)
//             Allows you to make reusable classes for many elements across your webpage

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

// Example 1 - add() & remove()
myButton.classList.add("enabled");
myButton.classList.remove("enabled");

// Example 2 - toggle()
myButton.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

// Example 3 - replace() & contains()
myButton.classList.add("enabled");

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😍";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

// Example 4 - Reusable Classes
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");

myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😍";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

// Example 5
let buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "😍";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});

console.log(buttons);
