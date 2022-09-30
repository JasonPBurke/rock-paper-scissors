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

// get the computers random selection and return it to be saved
//TODO: RESEARCH BITWISE OR | OPERATOR TO BETTER UNDERSTAND THE BELOW SOLUTION
function getComputerSelection() {
  return selections[(Math.random() * selections.length) | 0];
}

// get the players selection and return it to be saved
function getPlayerSelection() {
  playerSelection = prompt("Pick your throw!!  Rock, Paper, or Scissors: ");
  if (
    playerSelection === null ||
    !selections.includes(playerSelection.toLowerCase())
  ) {
    alert(`'${playerSelection}' is not a valid option.  Try again!`);
    return getPlayerChoice();
  } else {
    return playerSelection.toLowerCase();
  }
}

// play game: compare the selections and determine a winner
// output the winner of the round
function playRound(player, computer) {
  if (player === computer) {
    playerScore["ties"] += 1;
    computerScore["ties"] += 1;
    console.log(`It's a tie!`);
  } else if (player === "rock") {
    switch (computer) {
      case "scissors":
        playerScore["wins"] += 1;
        computerScore["losses"] += 1;
        console.log(`You won this round!`);
        break;
      case "paper":
        playerScore["losses"] += 1;
        computerScore["wins"] += 1;
        console.log(`You lost this round!`);
    }
  } else if (player === "paper") {
    switch (computer) {
      case "rock":
        playerScore["wins"] += 1;
        computerScore["losses"] += 1;
        console.log(`You won this round!`);
        break;

      case "scissors":
        playerScore["losses"] += 1;
        computerScore["wins"] += 1;
        console.log(`You lost this round!`);
    }
  } else if (player === "scissors") {
    switch (computer) {
      case "rock":
        playerScore["looses"] += 1;
        computerScore["wins"] += 1;
        console.log(`You lost this round!`);
        break;

      case "paper":
        playerScore["wins"] += 1;
        computerScore["looses"] += 1;
        console.log(`You won this round!`);
    }
  }
}

// repeat the above until the player or computer have won three games
// output the winner of the game
function game() {
    let stillPlaying = true;
    
    while(stillPlaying) {
        computerSelection = getComputerSelection();
        console.log(computerSelection);
        playerSelection = getPlayerSelection();
        playRound(playerSelection, computerSelection);
        if (playerScore['wins'] >= 3 || computerScore['wins'] >= 3) {
            stillPlaying = false;
        }
    }

  if (playerScore["wins"] === 3) {
    console.log("YOU WON THE GAME! CONGRATULATIONS!!");
  } else {
    console.log("So sorry, you lost the game.  Better luck next time!");
  }
}

// playRound(playerSelection, computerSelection);
game();
