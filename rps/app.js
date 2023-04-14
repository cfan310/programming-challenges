/*
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

//playFiveRounds();


// BROWSER GAME LOGIC   

// to begin the game, (a single game), the player clicks either the rock, paper, or scissors button 
// 

// rock, paper, scissors buttons stored as variables 
let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

// if player clicks rock, player will be assigned 'rock' as his selection
function getPlayerChoice() {
    let playerChoice = prompt('Please choose rock, paper, or scissors').toLowerCase();
    console.log(`Player chose ${playerChoice}`);
    return playerChoice; 
}

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

let playerChoice = 'rock'
let computerChoice = 'scissors';

let playerChoiceLog = document.getElementById('playerChoiceLog'); 
let computerChoiceLog = document.getElementById('computerChoiceLog'); 

let declareWinnerText = document.getElementById('declareWinnerText'); 


// Logic for a SINGLE ROUND (we will append the winner to the player / computer divs)

function gameRound(playerChoice, computerChoice) { 
    if (playerChoice == computerChoice) {
        // we will append this to the 
        declareWinnerText.innerHTML = `TIE GAME! YOU BOTH CHOSE ${computerChoice.toUpperCase()}`;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') { 
        // append ' 
        declareWinnerText.innerHTML = 'YOU WIN! ROCK SMASHES SCISSORS';               
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {  
        declareWinnerText.innerHTML = 'YOU WIN! PAPER COVERS ROCK';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        declareWinnerText.innerHTML = 'YOU WIN! SCISSORS CUTS PAPER';
    } else if (computerChoice == 'rock' && playerChoice == 'scissors') { 
        declareWinnerText.innerHTML = 'COMPUTER WINS! ROCK SMASHES SCISSORS';                     
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {  
        declareWinnerText.innerHTML = 'COMPUTER WINS! PAPER COVERS ROCK';
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {  
        declareWinnerText.innerHTML = 'COMPUTER WINS! SCISSORS CUTS PAPER';  
    }
}

rockBtn.addEventListener('click', function() {

    playerChoice = 'rock';
    computerChoice = getComputerChoice(); // logs rock, paper, or scissors 
    
    playerChoiceLog.innerHTML = playerChoice;
    computerChoiceLog.innerHTML = computerChoice;

    gameRound(playerChoice, computerChoice);
    // ^ return 0
    // add reset / refresh button
    }
);
paperBtn.addEventListener('click', function() {

    playerChoice = 'paper';
    computerChoice = getComputerChoice(); // logs rock, paper, or scissors 
    
    playerChoiceLog.innerHTML = playerChoice;
    computerChoiceLog.innerHTML = computerChoice;

    gameRound(playerChoice, computerChoice);
    // ^ return 0
    // add reset / refresh button
    }
);
scissorsBtn.addEventListener('click', function() {

    playerChoice = 'scissors';
    computerChoice = getComputerChoice(); // logs rock, paper, or scissors 
    
    playerChoiceLog.innerHTML = playerChoice;
    computerChoiceLog.innerHTML = computerChoice;

    gameRound(playerChoice, computerChoice);
    // ^ return 0
    // add reset / refresh button
    }
);



//      LOGIC FOR FIVE GAMES IN A ROW 


// rock, paper, scissors buttons stored as variables 
let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');

// if player clicks rock, player will be assigned 'rock' as his selection
function getPlayerChoice() {
    let playerChoice = prompt('Please choose rock, paper, or scissors').toLowerCase();     
    console.log(`Player chose ${playerChoice}`);
    return playerChoice; 
}

*/

// getPlayerChoice

// from here, the playerChoice will be the rpsButton.value
// no need for button event listeners; we can just pass the choices into our gameRound function

// thus rpsButton is the input of whichever button is clicked, so it will output rock, paper, or scissors


// returns either rock, paper, or scissors 


/*
let playerChoice = 'rock'
let computerChoice = 'scissors';

let playerChoiceLog = document.getElementById('playerChoiceLog'); 
let computerChoiceLog = document.getElementById('computerChoiceLog'); 

// we will put this in a five game loop and append a new <h2></h2> div 4 times 
let declareWinnerText = document.getElementById('declareWinnerText'); 
*/



// A click of one of the input buttons triggers the game, and the gameRound begins

const rpsButton = document.querySelectorAll('input');

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
 

function gameRound(playerChoice) { 

    let computerChoice = getComputerChoice(); 

    let gamesPlayed = 0; 
    let playerScore = 0;    // if playerscore is 5, disable buttons and reset game
    let computerScore = 0;   // if computerscore is 5, disable buttons and reset game

    let gameScoreboard = document.getElementById('gameScoreboard');
    gameScoreboard.innerHTML = `${playerScore} - ${computerScore}`;

    if (playerChoice == computerChoice) {
            // we will append this to the 
            declareWinnerText.innerHTML = `TIE GAME! YOU BOTH CHOSE ${computerChoice.toUpperCase()}`;
            // give correct winner a point
        } else if (playerChoice == 'rock' && computerChoice == 'scissors') { 
            gamesPlayed++; 
            playerScore++; 
            declareWinnerText.innerHTML = 'YOU WIN! ROCK SMASHES SCISSORS';               
        } else if (playerChoice == 'paper' && computerChoice == 'rock') {  
            gamesPlayed++; 
            playerScore++;
            declareWinnerText.innerHTML = 'YOU WIN! PAPER COVERS ROCK';
        } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
            gamesPlayed++; 
            playerScore++; 
            declareWinnerText.innerHTML = 'YOU WIN! SCISSORS CUTS PAPER';
        } else if (computerChoice == 'rock' && playerChoice == 'scissors') { 
            gamesPlayed++; 
            computerScore++;
            declareWinnerText.innerHTML = 'COMPUTER WINS! ROCK SMASHES SCISSORS';                     
        } else if (computerChoice == 'paper' && playerChoice == 'rock') {  
            gamesPlayed++; 
            computerScore++;
            declareWinnerText.innerHTML = 'COMPUTER WINS! PAPER COVERS ROCK';
        } else if (computerChoice == 'scissors' && playerChoice == 'paper') { 
            gamesPlayed++; 
            computerScore++;
            declareWinnerText.innerHTML = 'COMPUTER WINS! SCISSORS CUTS PAPER';  
        }
}

rpsButton.forEach(button => {
    button.addEventListener('click', gameRound(button.value));
}


/*

rockBtn.addEventListener('click', function() {

    playerChoice = 'rock';
    computerChoice = getComputerChoice(); // logs rock, paper, or scissors 
    
    playerChoiceLog.innerHTML = playerChoice;
    computerChoiceLog.innerHTML = computerChoice;

    gameRound(playerChoice, computerChoice);
   
    // ^ return 0
    // add reset / refresh button
    }
);
paperBtn.addEventListener('click', function() {

    playerChoice = 'paper';
    computerChoice = getComputerChoice(); // logs rock, paper, or scissors 
    
    playerChoiceLog.innerHTML = playerChoice;
    computerChoiceLog.innerHTML = computerChoice;

    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);

    // display RESET button that refreshes the game
     
    // ^ return 0
    // add reset / refresh button
    }
);
scissorsBtn.addEventListener('click', function() {

    playerChoice = 'scissors';
    computerChoice = getComputerChoice(); // logs rock, paper, or scissors 
    
    playerChoiceLog.innerHTML = playerChoice;
    computerChoiceLog.innerHTML = computerChoice;

    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    gameRound(playerChoice, computerChoice);
    // ^ return 0
    // add reset / refresh button
    }
);




*/
