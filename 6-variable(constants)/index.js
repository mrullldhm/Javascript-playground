const PI = 3.142;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = Number(document.getElementById("myRadius").value);
  console.log(radius, typeof radius);

  circumference = 2 * PI * radius;
  console.log(`The circumference is ${circumference}`);
  document.getElementById("myH3").textContent = `The circumference ${circumference}`
};
