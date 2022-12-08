function getComputerChoice() {
    let elements = ['rock', 'paper', 'scissors']
    return elements[Math.floor(Math.random() * elements.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return -1;
        } else if (computerSelection === "scissors") {
            return 1;
        } else {
            return 0;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            return -1;
        } else if (computerSelection === "rock") {
            return 1;
        } else {
            return 0;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return -1;
        } else if (computerSelection === "paper") {
            return 1;
        } else {
            return 0;
        }
    } else {
        return "Please enter a valid selection.";
    }
}

function game() {
    let user = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 1) {
            user++
            console.log(`You won! Scores: You: ${user}. Computer: ${computer}`)
        } else if (roundResult === -1) {
            computer++
            console.log(`You lose! Scores: You: ${user}. Computer: ${computer}`)
        } else if (roundResult === 0) {
            console.log(`It's a tie! Scores: You: ${user}. Computer: ${computer}`)
        } else {
            console.log(`That's not valid! Scores: You: ${user}. Computer: ${computer}`)
        }
    }
    return user > computer ? `You won! Result: You: ${user}. Computer: ${computer}`
    : computer > user ? `You lose! Result: You: ${user}. Computer: ${computer}`
    : `It's a tie! Result: You: ${user}. Computer: ${computer}`
}

console.log(game());