computerOptions = ["rock", "paper", "scissors"];
getComputerChoice =
  computerOptions[Math.floor(Math.random() * computerOptions.length)];
computerSelection = getComputerChoice;
console.log(getComputerChoice);

select = prompt("Rock, Paper or Scissors", "");
playerSelection = select;
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  if (select === getComputerChoice) {
    console.log("Tie");
  } else if (
    (select == "paper" && getComputerChoice == "rock") ||
    (select == "rock" && getComputerChoice == "scissors") ||
    (select == "scissors" && getComputerChoice == "paper")
  ) {
    console.log("You Win");
  } else if (
    (getComputerChoice == "paper" && select == "rock") ||
    (getComputerChoice == "rock" && select == "scissors") ||
    (getComputerChoice == "scissors" && select == "paper")
  ) {
    console.log("Comp Wins");
  } else {
    console.log("void");
  }
  return;
}
console.log(playRound(playerSelection, computerSelection));
