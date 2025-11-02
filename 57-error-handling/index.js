// Error = An object that is created to represent a problem that occurs often with user input or establishing a connection

// try {} = Encloses code that might potentially cause an error
// catch {} = Catch and handle any thrown Error from try  {}
// finally {} = (optional) Always executes. Used mostly for clean up
//              Example: close files, close connections, release resources

// Example 1
try {
  console.log(x);
} catch (err) {
  console.error(err);
} finally {
  console.log("This will always be executed");
}
console.log("This is the end of Example 1");

// Example 2
try {
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if (divisor == 0) {
    throw new Error("You can't divide by zero");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Value must be a number");
  }

  const result = dividend / divisor;
  console.log(`The result is ${result}`);
} catch (err) {
  console.error(err);
}

console.log("This is the end of Example 2");
