// DOM Navigation = The process of navigating tnrough the structure of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// Example 1 - .firstElementChild
let element1 = document.getElementById("fruits");
let child1 = element1.firstElementChild;
child1.style.background = "yellow";

element1 = document.querySelectorAll("ul");
element1.forEach((element) => {
  child1 = element.firstElementChild;
  child1.style.background = "yellow";
});
console.log(element1);

// Example 2 - .lastElementChild
let element3 = document.getElementById("fruits");
let child3 = element3.lastElementChild;
child3.style.background = "blue";

element3 = document.querySelectorAll("ul");
element3.forEach((element) => {
  child3 = element.lastElementChild;
  child3.style.background = "blue";
});
console.log(element3);

// Example 3 - .nextElementSibling
let element2 = document.getElementById("apple");
let child2 = element2.nextElementSibling;
child2.style.background = "red";

element2 = document.getElementById("carrot");
child2 = element2.nextElementSibling;
child2.style.background = "red";

element2 = document.getElementById("pie");
child2 = element2.nextElementSibling;
child2.style.background = "red";

// Example 4 - .previousElementSibling
element2 = document.getElementById("banana");
child2 = element2.previousElementSibling;
child2.style.background = "green";

element2 = document.getElementById("potato");
child2 = element2.previousElementSibling;
child2.style.background = "green";

element2 = document.getElementById("cake");
child2 = element2.previousElementSibling;
child2.style.background = "green";

// Example 5 - .parentElement
let allElements = document.getElementById("apple");
let parent = allElements.parentElement;
parent.style.background = "red";

// Example 6 - .children
let elements = document.getElementById("fruits");
let child = elements.children;
Array.from(child).forEach((element) => {
  element.style.background = "white";
});
