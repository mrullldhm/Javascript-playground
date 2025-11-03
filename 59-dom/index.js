// DOM = Document Object Model
//       Object{} that represent the page you see in the web browser and provide us with an API to interact with it
//       Web browsers construct the DOM when it load a HTML document and structure all the elements in a tree-like representation
//       Javascript can access the DOM to dynamically change the content, structure and style of a web page

// Example 1
document.title = "My Website";
console.log(document);
console.dir(document);

//  Example 2
document.body.style.background = "black";
document.body.style.background = "white";

// Example 3
const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;
document.body.welcomeMsg.colo;
console.dir(document);
