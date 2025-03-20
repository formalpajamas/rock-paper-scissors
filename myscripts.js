/* create what the console will play in rock paper scissors
console will have three possible options and will have to be random
random will give me something between 0-1, use an if to decide what
each portion is and assign to a variable.
*/

function getComputerChoice() {
   let choice = Math.random();
   if (choice <= .33) {
    return "rock";
   } else if (choice <= .66) {
    return "paper";
   } else {
    return "scissors";
   }
}

function getHumanChoice() {
    let choice = prompt("Let's play rock-paper-scissors! Enter your choice below!");

    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let message;

    if (humanChoice === computerChoice) {
        message = "You tied";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        message = "You lost";
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        message = "You lost";
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        message = "You lost";
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        message = "You won";
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message = "You won";
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message = "You won";
        humanScore += 1;
    }

    console.log(message);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


