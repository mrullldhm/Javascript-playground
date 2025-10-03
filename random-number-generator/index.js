// Default random 0-1
let random1 = Math.random();
console.log(random1);

// Random 1-6
let random2 = Math.floor(Math.random() * 6) + 1;
console.log(random2);

// Random 0-6
let random3 = Math.round(Math.random() *6);
console.log(random3);

// Random 50-100
const min = 50;
const max = 100;
let random4 = Math.floor(Math.random() * (max - min)) + min;
console.log(random4);

// Random Number Genarator
const press = document.getElementById("myPress");
const h3 = document.getElementById("myH3");
const h4 = document.getElementById("myH4");
const h5 = document.getElementById("myH5");


press.onclick = function () {
  const random5 = Math.round(Math.random() * 10000);
  const random6 = Math.round(Math.random() * 10000);
  const random7 = Math.round(Math.random() * 10000);

  h3.textContent = random5;
  h4.textContent = random6;
  h5.textContent = random7;
};
