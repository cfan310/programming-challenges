const rpsButton = document.querySelectorAll('input');

let btnContainer = document.getElementById('btn-container-append');

function disableButtons() {
    rpsButton.forEach(elem => {
        elem.disabled = true;
    })
    let refreshBtn = document.createElement('button');
    refreshBtn.innerHTML = 'Refresh Page';
    refreshBtn.addEventListener('click', function() {
        window.location.reload();
    })
    btnContainer.appendChild(refreshBtn);

}

function getComputerChoice() {  
    // assign random num 0-2 0 is rock 1 is paper 2 is scissors
    // return the choice
    let num = Math.floor(Math.random() * 3);
    let computerChoice;
    // return num; returns either 0, 1, or 2
    // if 0, computerChoice = 1 = rock
    if (num == 0) {
        computerChoice = 'rock'; 
    } else if (num == 1) {
        computerChoice = 'paper';
    } else if (num == 2) {
        computerChoice = 'scissors'; 
    }
    console.log(`Computer chose ${computerChoice}`);
    return computerChoice;   
}

let playerScore = 0;    // if playerscore is 5, disable buttons and reset game
let computerScore = 0;   // if computerscore is 5, disable buttons and reset game
 

function gameRound(playerChoice) { 

    let computerChoice = getComputerChoice(); 

    let gameScoreboard = document.getElementById('gameScoreboard');


    if (playerChoice == computerChoice) {
            // we will append this to the 
            declareWinnerText.innerHTML = `TIE GAME! YOU BOTH CHOSE ${computerChoice.toUpperCase()}`;
            // give correct winner a point
        } else if (playerChoice == 'rock' && computerChoice == 'scissors' || 
                    playerChoice == 'paper' && computerChoice == 'rock' ||
                    playerChoice == 'scissors' && computerChoice == 'paper') { 
            playerScore += 1;
            declareWinnerText.innerHTML = 'YOU WIN! ROCK SMASHES SCISSORS';  
            if (playerScore == 5) {
                // disable buttons 
                disableButtons();
            }         
        } else if (computerChoice == 'rock' && playerChoice == 'scissors' || 
                    computerChoice == 'paper' && playerChoice == 'rock' ||
                    computerChoice == 'scissors' && playerChoice == 'paper') { 
            computerScore += 1;
            declareWinnerText.innerHTML = 'COMPUTER WINS! ROCK SMASHES SCISSORS'; 
            if (computerScore == 5) {
                // disable buttons 
                disableButtons();
            }                        
        }
        gameScoreboard.innerHTML = `${playerScore} - ${computerScore}`;
        return
}

rpsButton.forEach(button => {
    button.addEventListener('click', function() {
        gameRound(button.value)
    });
});


