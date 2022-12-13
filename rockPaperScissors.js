function getComputerChoice() {
    let elements = ['🪨', '📜', '✂️']
    return elements[Math.floor(Math.random() * elements.length)];
}

function playRound(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = getComputerChoice();
    let roundResult = document.querySelector(".result");
    let scores = document.querySelector(".scores")
    let displayComputerSelection = document.querySelector(".computer-selection")
    let displayPlayerSelection = document.querySelector(".player-selection")
    displayComputerSelection.textContent = computerSelection
    displayPlayerSelection.textContent = playerSelection
    if (playerSelection === "🪨") {
        if (computerSelection === "📜") {
            computerScore++;
            roundResult.textContent = "You lose! Paper beats Rock!";
            scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
        } else if (computerSelection === "✂️") {
            playerScore++;
            roundResult.textContent = "You win! Rock beats Scissors!";
            scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
        } else {
            roundResult.textContent = "It's a tie! You both selected Rock!";
        }
    } else if (playerSelection === "📜") {
        if (computerSelection === "✂️") {
            computerScore++;
            roundResult.textContent = "You lose! Scissors beats Paper!";
            scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
        } else if (computerSelection === "🪨") {
            playerScore++;
            roundResult.textContent = "You win! Paper beats Rock!";
            scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
        } else {
            roundResult.textContent = "It's a tie! You both selected Paper!";
        }
    } else if (playerSelection === "✂️") {
        if (computerSelection === "🪨") {
            computerScore++;
            roundResult.textContent = "You lose! Rock beats Scissors!";
            scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
        } else if (computerSelection === "📜") {
            playerScore++;
            roundResult.textContent = "You win! Scissors beats Paper!";
            scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
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
        scores.textContent = `You: ${playerScore} Computer: ${computerScore}`
        displayComputerSelection.textContent = "❔"
        displayPlayerSelection.textContent = "❔"
    }
}

let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length;i++) {
    buttons[i].addEventListener("click", playRound)
}