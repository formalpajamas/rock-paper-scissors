/* create what the console will play in rock paper scissors
console will have three possible options and will have to be random
random will give me something between 0-1, use an if to decide what
each portion is and assign to a value of rock, paper, or scissors.
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
    let choice = prompt("Let's play rock-paper-scissors! Enter your selection below!");

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
        message = "You lost that round";
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        message = "You lost that round";
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        message = "You lost that round";
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        message = "You won that round";
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message = "You won that round";
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message = "You won that round";
        humanScore += 1;
    }

    console.log(message);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

/* Need to duplicate this 5 times and declare an ultimate winner at the end.
Make a variable that stores the number of times the game has been played, once it 
equals five we declare a winner.
*/

function playGame() {
    let round = 0;

    while (round < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }

    if (humanScore === computerScore) {
        console.log("You and the computer tied!");
    } else if (humanScore < computerScore) {
        console.log("The computer beat you this time");
    } else {
        console.log("You beat the computer!");
    }
}

playGame();


