let playerWinRound = 0;
let computerWinRound = 0;

function computerPlay(){
    switch(Math.floor(Math.random()*3 +1)){
        case 1:
            return 'rock';
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

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
}

    
function game(){

    let round = 0;
    do {
        computerSelection = computerPlay();
        // Need to add a check for valid input
        playerSelection = window.prompt('Rock, paper or scissors?').toLowerCase();
        console.log(playRound(computerSelection, playerSelection));
        round++;
    } while (round < 5);
    if (playerWinRound === computerWinRound){
        console.log("It's a tie out of the 5 rounds!");
    }
    else if (playerWinRound > computerWinRound){
        console.log(`You win with ${playerWinRound} out of 5 rounds.`);
    }
    else {
        console.log(`Computer wins with ${computerWinRound} out of 5 rounds.`);
    }
}

game();