function getComputerChoice() {
    let elements = ['Rock', 'Paper', 'Scissors']
    return elements[Math.floor(Math.random() * elements.length)];
}

function playRound(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = getComputerChoice();
    let roundResult = document.querySelector(".result");
    let scores = document.querySelector(".scores")
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            roundResult.textContent = "You lose! Paper beats Rock!";
            scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
        } else if (computerSelection === "Scissors") {
            playerScore++;
            roundResult.textContent = "You win! Rock beats Scissors!";
            scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
        } else {
            roundResult.textContent = "It's a tie! You both selected Rock!";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            computerScore++;
            roundResult.textContent = "You lose! Scissors beats Paper!";
            scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
        } else if (computerSelection === "Rock") {
            playerScore++;
            roundResult.textContent = "You win! Paper beats Rock!";
            scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
        } else {
            roundResult.textContent = "It's a tie! You both selected Paper!";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            computerScore++;
            roundResult.textContent = "You lose! Rock beats Scissors!";
            scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
        } else if (computerSelection === "Paper") {
            playerScore++;
            roundResult.textContent = "You win! Scissors beats Paper!";
            scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
        } else {
            roundResult.textContent = "It's a tie! You both selected Scissors!";
        }
    }
    if (playerScore === 5 || computerScore === 5) {
        roundResult.textContent = playerScore > computerScore ? 
        `Game over! You win! You: ${playerScore} Computer: ${computerScore}` :
        `Game over! You lose! You: ${playerScore} Computer: ${computerScore}`
        playerScore = 0;
        computerScore = 0;
        scores.textContent = `Scores: You: ${playerScore} Computer: ${computerScore}`
    }
}

let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length;i++) {
    buttons[i].addEventListener("click", playRound)
}