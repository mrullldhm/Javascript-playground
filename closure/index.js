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
  // return {increment:increment}
  return { increment };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
