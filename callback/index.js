function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function print(result) {
  console.log(result);
}

function display(result) {
  document.getElementById("myH1").textContent = result;
}

sum(display, 2, 3);
