function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:");

  humanChoice = humanChoice.toLowerCase();

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    return "It's a draw!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "Human wins.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "Human wins.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "Human wins.";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    return "Computer wins.";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    return "Computer wins.";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    return "Computer wins.";
  } else {
    return "Invalid choice.";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    console.log(result);

    if (result === "Human wins.") {
      humanScore++;
    } else if (result === "Computer wins.") {
      computerScore++;
    }
  }

  console.log("Human score:", humanScore);
  console.log("Computer score:", computerScore);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a draw!");
  }
}

playGame();