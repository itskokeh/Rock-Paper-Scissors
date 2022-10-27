let playerScore = 0;
let computerScore = 0;
let roundWinner = "";


let computerOptions = ["rock", "paper", "scissors"];
function getComputerChoice(){
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
computerSelection = getComputerChoice();
computerChoice = computerSelection;
console.log(computerSelection);

function selectG(){
  return prompt("Rock, Paper or Scissors", "");
}
select = selectG();
playerSelection = select;
console.log(playerSelection);

function playRound(selectG, computerChoice){
  if (
    (select == "paper" && computerChoice == "paper") || 
    (select == "rock" && computerChoice == "rock") ||
    (select == "scissors" && computerChoice == "scissors")) 
    {
    roundWinner = "tie";
    console.log("Tie");
  } if (
    (selectG == "paper" && computerChoice == "rock") ||
    (selectG == "rock" && computerChoice == "scissors") ||
    (selectG == "scissors" && computerChoice == "paper")
  ) {
    playerScore++;
    roundWinner = "player";
    console.log("You Win");
  } if (
    (computerChoice == "paper" && select == "rock") ||
    (computerChoice == "rock" && select == "scissors") ||
    (computerChoice == "scissors" && select == "paper")
  ) {
    computerScore++;
    roundWinner = "computer";
    console.log("Comp Wins");
  }
}
function game(){
  playRound(select,computerChoice)
  selectG()
  getComputerChoice()
}

function declareWinner(){
  return playerScore === 5 || computerScore === 5;
}

// function game(){
//   for(let i = 0; i < 5; i++){
//     selectG(playRound(select, computerChoice))
//   }
//   declareWinner()
// }
for (let i = 0; i < 5; i++){
  if (playerScore < 5 || computerScore < 5){
    game();
  } else {
    declareWinner();
    console.log(i);
  }
}

console.log(playerScore);
console.log(computerScore);
console.log(roundWinner);