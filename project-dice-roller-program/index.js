function diceRoller() {
  const dice = document.getElementById("dice");
  const diceResults = document.getElementById("diceResults");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  const diceValues = dice.value;
  console.log(diceValues);

  for (let i = 0; i < diceValues; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(value);

    values.push(value);
    console.log(values);

    images.push(`<img src="images/dice${value}.png">`);
    console.log(images);
  }

  diceResults.textContent = `Your dice number is ${values.join("-")}`;
  diceImages.innerHTML = images.join(" ");
}
