
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
            return "You lose! Paper envelopes rock"
        }
        else if (computerSelection == 'scissors'){
            return "You win! Rock smashes scissors."
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You win! Paper envelopes rock."
        }
        else if (computerSelection == 'scissors'){
            return "You lose! Scissors cut paper."
        }
    }
    else {
        if (computerSelection == 'rock') {
            return "You lose! Rock smashes scissors."
        }
        else if (computerSelection == 'paper'){
            return "You win! Scissors cut paper."
        }
    }
    console.log(playerSelection);
}
computerSelection = computerPlay();
    // Need to add a check for valid input
playerSelection = window.prompt('Rock, paper or scissors?').toLowerCase();
    
console.log(playRound(computerSelection, playerSelection));