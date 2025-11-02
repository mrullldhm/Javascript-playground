// setTimeout() = Function in Javascript that allows you to schedule the execution of a function after an amount of time (milliseconds)
//                Times are approximate (varies based on the workload of the Javascript runtime env.)
//                setTimeout(callback, delay)
// clearTimeout(timeoutId) = Cancel a timeout before it triggers

// Example 1
function sayHello() {
  window.alert("Alert 1");
}
setTimeout(sayHello, 1000);

setTimeout(function () {
  window.alert("Alert 2");
}, 2000);

setTimeout(() => {
  window.alert("Alert 3");
}, 3000);

// Example 2
// clearTimeout()

const sayHello4 = setTimeout(() => {
  window("Alert 4");
}, 4000);
clearTimeout(sayHello4);

// Example 4
// Html.index
function startTimer() {
  timeoutId = setTimeout(() => {
    window.alert("You clicked the button");
  }, 3000);
  console.log("Start Timer");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Stop Timer");
}
