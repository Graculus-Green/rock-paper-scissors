
let playerWinRound = 0;
let computerWinRound = 0;
let tieRound = 0;

function updateResults() {
    document.getElementById("counter-player").innerHTML = `Player win count: ${playerWinRound}.`;
    document.getElementById("counter-comp").innerHTML = `Computer win count: ${computerWinRound}.`;
    document.getElementById("counter-tie").innerHTML = `Tie count: ${tieRound}.`;

};
function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[choice];
};

function playRound(computerSelection, playerSelection){

    if (computerSelection === playerSelection){
        tieRound ++;
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
    updateResults();
    console.log(playerWinRound, computerWinRound, tieRound);
};

    
function game(){

   
    while (playerWinRound < 5 || computerWinRound <5) {
        playerPlay();
    };
    if (playerWinRound === 5){
        console.log("Player wins overall!");
    }
    else if (computerWinRound === 5){
        console.log("Computer wins overall!");
    }
    else {
        console.log("There's still all to play for!");
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
            document.getElementById("results").innerHTML = playRound(computerSelection, playerSelection);
            updateResults();
        });
    });
};
const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
  
playerPlay();