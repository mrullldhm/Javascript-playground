let username = window.prompt("What is your username");

// No Method Chaining
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();

username = letter + extraChar;
console.log(username);

// Method Chaining
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
