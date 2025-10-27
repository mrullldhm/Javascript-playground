// Fisher-Yates Algorithm

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
console.log(...cards);

function shuffle(arrays) {
  for (let i = arrays.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [arrays[i], arrays[random]] = [arrays[random], arrays[i]];
  }
}

shuffle(cards);
console.log(...cards);
