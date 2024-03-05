const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const totalMatch = document.getElementById("totalMatch");
const reset = document.getElementById("reset");
const exit = document.getElementById("exit");
let playerScoreInt = 0;
let computerScoreInt = 0;
let totalMatchInt = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!" : "You Lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!" : "You Lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!" : "You Lose!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove(
    "greenText",
    "redText",
    "greyText",
    "defaultText"
  );

  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greenText");
      playerScoreInt++;
      totalMatchInt++;
      playerScore.textContent = playerScoreInt;
      totalMatch.textContent = totalMatchInt;
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      computerScoreInt++;
      totalMatchInt++;
      computerScore.textContent = computerScoreInt;
      totalMatch.textContent = totalMatchInt;
      break;
    default:
      resultDisplay.classList.add("greyText");
      totalMatchInt++;
      totalMatch.textContent = totalMatchInt;
      break;
  }
}

function ResetGame() {
  playerScoreInt = 0;
  computerScoreInt = 0;
  totalMatchInt = 0;
  playerDisplay.textContent = "PLAYER:";
  computerDisplay.textContent = "COMPUTER:";
  resultDisplay.textContent = "RESULT:";
  playerScore.textContent = playerScoreInt;
  computerScore.textContent = computerScoreInt;
  totalMatch.textContent = totalMatchInt;
  resultDisplay.classList.add("defaultText");
}
function ExitGame() {
  close();
}
