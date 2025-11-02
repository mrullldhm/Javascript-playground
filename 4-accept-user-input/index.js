// Window prompt
let username1 = window.prompt("Whats your username");
console.log(username1);
document.getElementById("myH1").textContent = `First Method ${username1}`

// Professional Method
document.getElementById("mySubmit").onclick = function () {
  let username = document.getElementById("myText").value;
  console.log(username);

  document.getElementById("myH1").textContent = `Second Method ${username}`;
};
