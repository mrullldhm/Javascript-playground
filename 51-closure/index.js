// Closure = A function defined inside of another function
//           The inner function has an access to the variables and scope of the outer function
//           Allow for private variables and state maintenance
//           Used frequently in JS Frameworks (React, Vue, Angular)

// Example 1

function outer() {
  let message = "Hello";
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// Example 2
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  // return {increment:increment}
  return { increment, getCount };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

// Example 3
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}points`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`+${points}points`);
  }

  function getScore() {
    console.log(`The final score is ${score} points`);
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

let game = createGame();

game.increaseScore(9);
game.decreaseScore(1);
game.getScore();
