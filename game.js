// ROCK-PAPER-SCISSORS GAME//

// set up global variables: selection array, computer/player selection, and computer/player score
let selections = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};
let computerScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const btns = document.querySelectorAll(".buttons > button");
const results = document.querySelector(".results");
const score = document.querySelector(".score");

// get the computers random selection and return it to be saved
//TODO: RESEARCH BITWISE OR | OPERATOR TO BETTER UNDERSTAND THE BELOW SOLUTION
function getComputerSelection() {
  return selections[(Math.random() * selections.length) | 0];
}

// get the players selection and return it to be saved
function getPlayerSelection(searchId) {
  return searchId.id;
}

// play game: compare the selections and determine a winner
// output the winner of the round
function playRound(player, computer) {
  if (player === computer) {
    playerScore["ties"] += 1;
    computerScore["ties"] += 1;
    document.querySelector(
      ".player > .tie"
    ).textContent = `ties: ${playerScore["ties"]}`;
    document.querySelector(
      ".computer > .tie"
    ).textContent = `ties: ${computerScore["ties"]}`;
    results.textContent = `It's a tie!`;
  } else if (player === "rock") {
    switch (computer) {
      case "scissors":
        playerScore["wins"] += 1;
        computerScore["losses"] += 1;
        document.querySelector(
          ".player > .win"
        ).textContent = `wins: ${playerScore["wins"]}`;
        document.querySelector(
          ".computer > .loss"
        ).textContent = `losses: ${computerScore["losses"]}`;
        results.textContent = `Rock Beats Scissors!  You won this round!`;
        break;
      case "paper":
        playerScore["losses"] += 1;
        computerScore["wins"] += 1;
        document.querySelector(
          ".player > .loss"
        ).textContent = `losses: ${playerScore["losses"]}`;
        document.querySelector(
          ".computer > .win"
        ).textContent = `wins: ${computerScore["wins"]}`;
        results.textContent = `Rock loses to Paper.  You lost this round!`;
    }
  } else if (player === "paper") {
    switch (computer) {
      case "rock":
        playerScore["wins"] += 1;
        computerScore["losses"] += 1;
        document.querySelector(
          ".player > .win"
        ).textContent = `wins: ${playerScore["wins"]}`;
        document.querySelector(
          ".computer > .loss"
        ).textContent = `losses: ${computerScore["losses"]}`;
        results.textContent = `Paper beats Rock! You won this round!`;
        break;

      case "scissors":
        playerScore["losses"] += 1;
        computerScore["wins"] += 1;
        document.querySelector(
          ".player > .loss"
        ).textContent = `losses: ${playerScore["losses"]}`;
        document.querySelector(
          ".computer > .win"
        ).textContent = `wins: ${computerScore["wins"]}`;
        results.textContent = `Paper loses to Scissors.  You lost this round!`;
    }
  } else if (player === "scissors") {
    switch (computer) {
      case "rock":
        playerScore["losses"] += 1;
        computerScore["wins"] += 1;
        document.querySelector(
          ".player > .loss"
        ).textContent = `losses: ${playerScore["losses"]}`;
        document.querySelector(
          ".computer > .win"
        ).textContent = `wins: ${computerScore["wins"]}`;
        results.textContent = `Scissors loses to Rock.  You lost this round!`;
        break;

      case "paper":
        playerScore["wins"] += 1;
        computerScore["losses"] += 1;
        document.querySelector(
          ".player > .win"
        ).textContent = `wins: ${playerScore["wins"]}`;
        document.querySelector(
          ".computer > .loss"
        ).textContent = `losses: ${computerScore["losses"]}`;
        results.textContent = `Scissors beats Paper!  You won this round!`;
    }
  } else {
    console.log("Something went horribly wrong...");
    return;
  }
  return;
}

btns.forEach((btn) => btn.addEventListener("click", () => game(btn)));


// repeat the above until the player or computer have won three games
// output the winner of the game
function game(btn) {
  btn.classList.add('playing');
  playRound(getPlayerSelection(btn), getComputerSelection());
  btn.addEventListener('transitionend', removeTransition);

  if (playerScore["wins"] === 5) {
    results.textContent = "YOU WON THE GAME!  CONGRATULATIONS!!";
    playAgain();
  } else if (computerScore["wins"] === 5) {
    results.textContent =
    "So sorry, you lost the game.  Better luck next time!";
    playAgain();
  }
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playAgain() {
  btns.forEach((btn) => btn.disabled = true);
  const playAgainBtn = document.querySelector('.play-again');
  playAgainBtn.classList.remove('hidden');
  // do these things on click of play again button 
  // else end the program/ do nothing (rps buttons should be disabled)
  
  playAgainBtn.addEventListener('click', () => {
    btns.forEach((btn) => btn.disabled = false);
    Object.keys(playerScore).forEach((i) => playerScore[i] = 0);
    Object.keys(computerScore).forEach((i) => computerScore[i] = 0);
    document.querySelector(".player > .win").textContent = `wins: 0`;
    document.querySelector(".computer > .loss").textContent = `losses: 0`;
    document.querySelector(".player > .loss").textContent = `losses: 0`;
    document.querySelector(".computer > .win").textContent = `wins: 0`;
    document.querySelector(".player > .tie").textContent = `ties: 0`;
    document.querySelector(".computer > .tie").textContent = `ties: 0`;
    results.textContent = `Let's Go!!!`;
    playAgainBtn.classList.add('hidden');
  });
  
}
