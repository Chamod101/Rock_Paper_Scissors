let getComputerChoice = () => {
    let values = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    let text = values[i]
    return text;
}

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        console.log("No winners!")
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer wins!");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("User wins!");
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("User wins!");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("User wins!");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer wins!");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Computer wins!");
    } else {
        console.log("Error");
    }

}

const playerSelection = prompt("Enter Rock, Paper or Scissors");
const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));


let game = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}



