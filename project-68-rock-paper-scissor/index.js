const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissor" ? "You WIN" : "You LOST";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You WIN" : "You LOST";
        break;
      case "scissor":
        result = computerChoice === "paper" ? "You WIN" : "You LOST";
        break;
    }
  }
  player.textContent = `PLAYER: ${playerChoice}`;
  computer.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  console.log(result);

  resultDisplay.classList.remove("greenText", "redText", "blueText");

  switch (result) {
    case "You WIN":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You LOST":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = playerScore;

      break;
    case "It's a TIE":
      resultDisplay.classList.add("blueText");
      break;
  }
}
