const display = document.getElementById("display");

function press(input) {
  display.value += input;
  console.log(`The input ${input}`);
}

function calculate() {
  try {
    display.value = eval(display.value);
    console.log(`The result is ${display.value}`);
  } catch (err) {
    display.value = "Error";
    console.error(err);
  }
}

function clearDis() {
  display.value = "";
}
