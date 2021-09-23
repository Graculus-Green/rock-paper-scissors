
function computerPlay(){
    switch(Math.floor(Math.random()*3 +1)){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}

function playRound(computerSelection, playerSelection){
    computerSelection = computerPlay();
    // Need to add a check for valid input
    playerSelection = window.prompt('Rock, paper or scissors?').toLowerCase();
  
    console.log(playerSelection);
}

playRound();