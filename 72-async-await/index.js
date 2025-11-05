// Async = Makes a function return a promise
// Await = Makes an Async function wait for a promise

//         Allows you write asynchronous code in a synchronous manner
//         Asyncs don't have resolve or reject parameters
//         Everything after Await is placed in an event queue

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
async function doChores() {
  try {
    const walkDogResult = await walkDog1();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen1();
    console.log(cleanKitchenResult);

    const takeTrashResult = await takeTrash1();
    console.log(takeTrashResult);

    console.log("I finish all the chores");
  } catch (err) {
    console.error(err);
  }
}

doChores();
