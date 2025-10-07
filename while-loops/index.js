// Condition first Execute later
// let username = "";

// while (username === "") {
//   console.log("You did not enter the username");
//   username = window.prompt("Please enter your username to continue");
// }
// console.log(`Your username is ${username}`);

// Execute first Condition later
// let username1;

// do {
//   username1 = window.prompt("Please enter your username to continue");
// } while (username1 === "");
// console.log(`Your username is ${username1}`);

// Combination with if else
let isLogged = false;
let username;
let password;

while (!isLogged) {
  username = window.prompt("Please enter the username");
  password = window.prompt("Please enter the password");

  if (username === "Amirul" && password === "Amirul") {
    isLogged = true;
    console.log("You are logged in");
  } else {
    window.alert("Wrong username or password");
    console.log("Wrong username or password");
  }
}
