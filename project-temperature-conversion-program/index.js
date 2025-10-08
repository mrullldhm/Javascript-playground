let input = document.getElementById("temperature");
let f = document.getElementById("f");
let c = document.getElementById("c");
let result = document.getElementById("result");

function convert() {
  if (f.checked) {
    let temp = Number(input.value);
    temp = temp * 1.8 + 32;
    console.log(temp);
    return (result.textContent = temp.toFixed(2));
  } else if (c.checked) {
    let temp = Number(input.value);
    temp = (temp - 32) / 1.8;
    console.log(temp);
    return (result.textContent = temp.toFixed(2));
  } else {
    console.log("Please pick the converter");
    result.textContent = "Please choose the converter";
  }
}
