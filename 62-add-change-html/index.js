// Example 1 - <h1>
// Step 1 - create the element
const newH1 = document.createElement("h1");
// Step 2 - add attributes/properties
newH1.textContent = "I like Lionel Messi!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// Step 3 - append element to DOM
document.body.append(newH1);
// ------------------------------------------ //
document.body.prepend(newH1);
// ------------------------------------------ //
const box1 = document.getElementById("box1");
box1.prepend(newH1);
// ------------------------------------------ //
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
// Step 4 - remove HTML element
document.body.removeChild(newH1);

// Example 2 - <li>
// Step 1 - create the element
const newList = document.createElement("li");
// Step 2 - add attributes/properties
newList.textContent = "coconut (Special Edition)";
newList.id = "coconut";
newList.style.fontWeight = "bold";
newList.style.background = "green";
// Step 3 - append element to DOM
const fruits = document.getElementById("fruits");
fruits.prepend(newList);
fruits.append(newList);
fruits.insertBefore(newList, banana);
// Step 4 - remove HTML element
document.getElementById("fruits").removeChild(newList);
