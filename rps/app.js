// returns either rock, paper, or scissors 
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

// get player choice

function getPlayerChoice() {
    // console prompt
    let playerChoice = prompt('Please choose rock, paper, or scissors').toLowerCase();
    console.log(`Player chose ${playerChoice}`);
    return playerChoice; 
}

function gameRound(playerChoice, computerChoice) { 
    if (playerChoice == computerChoice) {
        gamesPlayed++;
        console.log(`games played: ${gamesPlayed}`);
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`);
        return `TIE GAME! YOU BOTH CHOSE ${computerChoice.toUpperCase()}`;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') { 
        gamesPlayed++; 
        playerScore++;
        console.log(`games played: ${gamesPlayed}`);      
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`);  
        return 'YOU WIN! ROCK SMASHES SCISSORS';               
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {  
        gamesPlayed++;
        playerScore++;     
        console.log(`games played: ${gamesPlayed}`); 
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`); 
        return 'YOU WIN! PAPER COVERS ROCK';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        gamesPlayed++; 
        playerScore++;
        console.log(`games played: ${gamesPlayed}`);      
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`);  
        return 'YOU WIN! SCISSORS CUTS PAPER';
    } else if (computerChoice == 'rock' && playerChoice == 'scissors') { 
        gamesPlayed++;
        computerScore++;
        console.log(`games played: ${gamesPlayed}`);      
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`);  
        return 'COMPUTER WINS! ROCK SMASHES SCISSORS';                     
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {  
        gamesPlayed++;
        computerScore++;   
        console.log(`games played: ${gamesPlayed}`);   
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`);
        return 'COMPUTER WINS! PAPER COVERS ROCK';
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') { 
        gamesPlayed++;
        computerScore++; 
        console.log(`games played: ${gamesPlayed}`);     
        console.log(`player score: ${playerScore}`); 
        console.log(`computer score: ${computerScore}`); 
        return 'COMPUTER WINS! SCISSORS CUTS PAPER';  
    }
}
          
function game() {
    console.log(gameRound(getPlayerChoice(), getComputerChoice()));  
}

var playerScore = 0; 
var computerScore = 0; 
var gamesPlayed = 0;

function playFiveRounds() {
    i = 1;
    while (i <= 5) {
        game(); 
        i++;
    }
    if (playerScore == computerScore) {
        console.log(`After 5 rounds we have a tie! Player Score: ${playerScore}. Computer Score: ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`Player is the winner after 5 rounds. Player score: ${playerScore}. Computer score: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Computer is the winner after 5 rounds. Computer score: ${computerScore}. Computer score: ${playerScore}`)
    }
    return 0;

   
}

playFiveRounds();