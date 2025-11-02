// Synchronous = Execute line by line consecutively in a sequential manner
//               Code that waits an operation to complete

// Asynchronous = Allows multiple operation to be performed concurrently without waiting
//                Doesn't block the execution flow and allow the program to continue
//                (I/O operations, network request, fetching data)
//                Handled with: Callbacks, Promises, Async/Await

// Example 1
// Asynchronous, setTimeout()
setTimeout(() => {
  console.log("Task 1");
}, 3000);
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// Example 2
// Aynchronous, callback
function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);
