let computer = 0;
let player = 0;

let getComputerChoice = () => {
    let values = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    let text = values[i]
    return text;
}

let ComputerWins = () => {
    computer = computer + 1;
}

let PlayerWins = () => {
    player = player + 1;

}

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {

        return "No winners! Game Draw ";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        ComputerWins();
        return "Computer wins! Paper Beats the Rock";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        PlayerWins();
        return "User wins! Rock Beats the Scissors";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        PlayerWins();
        return "User wins! Paper Beats the Rock";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        ComputerWins();
        return "Computer wins! Scissors beats the paper";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        ComputerWins();
        return "Computer wins! Rock beats the Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        PlayerWins();
        return "User wins! Scissors beats the paper";
    } else {
        return "There is an Error!";
    }
}



let game = () => {
    let i = 1;
    for (i; i <= 5; i++) {
        console.log("Round " + i);
        const playerSelection = prompt("Enter Rock, Paper or Scissors");
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log("Computer : " + computer + " , Player : " + player);
    }
    let val = i - 1;

    if (computer === player) {
        console.log("Finally, Match is Draw.");
    }
    else if (computer > player) {
        console.log("Finally, COMPUTER WINS.")
    }
    else if (computer < player) {
        console.log("Finally, PLAYER WINS.")
    }

}

game();




