for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year");

for (let i = 1; i <= 11; i++) {
  if (i == 3) {
    console.log("4A");
  } else if (i == 7) {
    continue;
  } else if (i == 11) {
    break;
  } else {
    console.log(i);
  }
}
