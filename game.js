// ROCK-PAPER-SCISSORS //

// set up global variables: selection array, computer selection, and player selection
let selections = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;

// get the computers random selection
//! RESEARCH BITWISE OR | OPERATOR TO BETTER UNDERSTAND THE BELOW SOLUTION
function getComputerSelection() {
  return selections[(Math.random() * selections.length) | 0];
}
// save computer selection
computerSelection = getComputerSelection();
console.log(computerSelection);
// get the players selection
function getPlayerChoice() {
    return prompt('Pick your throw!!  Rock, Paper, or Scissors: ').toLowerCase();
}
// save player selection
playerSelection = getPlayerChoice();
console.log(playerSelection);
// play game: compare the selections and determine a winner
function playRound() {}
// output the winner of the round
console.log();

// repeat the above until the player or computer have won three out of five
function game() {}
// output the winner of the game
console.log();
