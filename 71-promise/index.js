// Promise = An object that manages asychronous operations
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// Walk The Dog
// Clean The Kitchen
// Take Out The Trash

function walkDog(callback) {
  setTimeout(() => {
    console.log("I walk the dog 🐕");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("I clean the kitchen 🧼");
    callback();
  }, 2500);
}

function takeTrash(callback) {
  setTimeout(() => {
    console.log("I takeout the trash 🗑️");
    callback();
  }, 500);
}

walkDog(() => {
  cleanKitchen(() => {
    takeTrash(() => {
      console.log("I have finish all the task");
    });
  });
});

// ------------------------------------------------------------------ //
function walkDog1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;

      if (dogwalked) {
        resolve("I walk the dog 🐕");
      } else {
        reject("I didn't walk the dog 🐕");
      }
    }, 1500);
  });
}

function cleanKitchen1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = false;

      if (kitchenCleaned) {
        resolve("I clean the kitchen 🧼");
      } else {
        reject("I didn't clean the kitchen 🧼");
      }
    }, 2500);
  });
}

function takeTrash1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTaked = true;

      if (trashTaked) {
        resolve("I takeout the trash 🗑️");
      } else {
        reject("I didn't takeout the trash 🗑️");
      }
    }, 500);
  });
}

walkDog1()
  .then((value) => {
    console.log(value);
    return cleanKitchen1();
  })
  .then((value) => {
    console.log(value);
    return takeTrash1();
  })
  .then((value) => {
    console.log(value);
    console.log("I have finish all the task");
  })
  .catch((error) => {
    console.error(error);
  });
