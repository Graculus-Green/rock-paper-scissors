
let playerWinRound = 0;
let computerWinRound = 0;

function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[choice];
};

function playRound(computerSelection, playerSelection){

    if (computerSelection === playerSelection){
        return "It's a tie!";
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerWinRound += 1;
            return "You lose! Paper envelopes rock"
        }
        else if (computerSelection == 'scissors'){
            playerWinRound += 1;
            return "You win! Rock smashes scissors.";
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerWinRound += 1;
            return "You win! Paper envelopes rock."
        }
        else if (computerSelection == 'scissors'){
            computerWinRound += 1;
            return "You lose! Scissors cut paper.";
        }
    }
    else {
        if (computerSelection == 'rock') {
            computerWinRound += 1;
            return "You lose! Rock smashes scissors.";

        }
        else if (computerSelection == 'paper'){
            playerWinRound += 1;
            return "You win! Scissors cut paper.";

        }
    }
};

    
function game(){

   
    while (playerWinRound < 5 || computerWinRound <5) {
        computerSelection = computerPlay();
        // Need to add a check for valid input
        playerSelection = window.prompt('Rock, paper or scissors?').toLowerCase();
        console.log(playRound(computerSelection, playerSelection));
        round++;
    };
    if (playerWinRound === computerWinRound){
        console.log("It's a tie out of the 5 rounds!");
    }
    else if (playerWinRound > computerWinRound){
        console.log(`You win with ${playerWinRound} out of 5 rounds.`);
    }
    else {
        console.log(`Computer wins with ${computerWinRound} out of 5 rounds.`);
    };
};

//game();
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
};

function playerPlay () {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('playing');
            

            playerSelection = button.id.toString();
            computerSelection = computerPlay();
            console.log(playRound(computerSelection, playerSelection));
        });
    });
};
const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
  
playerPlay();