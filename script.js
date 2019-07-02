const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const roundDiv = document.querySelector("#round");
const scoreDiv = document.querySelector("#score");

btnRock.addEventListener("click", function() {
  playRound("rock");
});
btnPaper.addEventListener("click", function() {
  playRound("paper");
});
btnScissors.addEventListener("click", function() {
  playRound("scissors");
});

function randomNumber() {
  // return a random value between 1 and 3
  return Math.floor(Math.random() * (4 - 1)) + 1;
}
function computerPlay() {
  let choice = randomNumber();
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    roundDiv.textContent = `It's a tie`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    roundDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
    checkScore();
    console.log(winner);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    roundDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
    checkScore();
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    roundDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
    checkScore();
  } else {
    roundDiv.textContent = `You loose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
    checkScore();
  }
}
function checkScore() {
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      scoreDiv.textContent = `You win! Final Score is: Computer ${computerScore} - ${playerScore} Player`;
      playerScore = 0;
      computerScore = 0;
    } else {
      scoreDiv.textContent = `You lost! Final Score is: Computer ${computerScore} - ${playerScore} Player`;
      playerScore = 0;
      computerScore = 0;
    }
  }
}
