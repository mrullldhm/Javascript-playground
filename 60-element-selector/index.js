// Element Selector = Method used to target and manipulate HTML elements
//                    It allow us to select one or multiple HTML elements from the DOM (Document Object Model)

// 1. document.getElementById()       - Element or Null
// 2. document.getElementClassName()  - HTML collection
// 3. document.getElementByTagName()  - HTML collection
// 4. document.querySelector()        - Element or Null
// 5. document.querySelectorAll()     - Nodelist

// Example 1 - document.getElementById()
const myHeading = document.getElementById("my-heading");
myHeading.style.background = "green";
myHeading.style.textAlign = "center";
console.log(myHeading);

// Example 2 - document.getElementClassName()
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.background = "yellow";
fruits[1].style.background = "blue";
fruits[2].style.background = "red";

for (let fruit of fruits) {
  fruit.style.background = "gray";
}

Array.from(fruits).forEach((fruit) => {
  fruit.style.background = "white";
});

console.log(fruits);

// Example 3 - document.getElementByTagName()
const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.background = "yellow";
h4Elements[1].style.background = "blue";

for (let h4Element of h4Elements) {
  h4Element.style.background = "gray";
}

Array.from(h4Elements).forEach((h4Element) => {
  h4Element.style.background = "white";
});

console.log(h4Elements);
// ----------------------------------------------------- //
const liElements = document.getElementsByTagName("li");
liElements[0].style.background = "yellow";
liElements[1].style.background = "blue";

for (let liElement of liElements) {
  liElement.style.background = "lightgreen";
}

Array.from(liElements).forEach((liElement) => {
  liElement.style.background = "white";
});

console.log(liElements);

// Example 4 - document.querySelector()
const element = document.querySelector(".fruits");
element.style.background = "blue";
element.style.background = "white";

console.log(element);

// Example 4 - document.querySelectorAll()
const queFruits = document.querySelectorAll(".fruits");
queFruits[0].style.background = "blue";
queFruits[1].style.background = "yellow";
queFruits[2].style.background = "red";

queFruits.forEach((liElement) => {
  liElement.style.background = "white";
});

console.log(queFruits);
