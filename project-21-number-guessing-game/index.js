const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt("Please guess the number between 1-100");
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Invalid guess. Guess the number between 1-100");
  } else if (guess < 1) {
    window.alert("Your guess is below 1. Guess the number between 1-100");
  } else if (guess > 100) {
    window.alert("Your guess is above 100. Guess the number between 1-100");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(`Your ${attempts} guess is too LOW.`);
    } else if (guess > answer) {
      window.alert(`Your ${attempts} guess is too HIGH`);
    } else {
      window.alert(`CONGRATULATIONS. It tooks you ${attempts} guess`);
      running = false;
    }
  }
}
