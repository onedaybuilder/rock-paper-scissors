let playerSelection = prompt('Rock, paper or scissors');
let computerSelection = computerPlay();


function computerPlay(){
    random = Math.floor(Math.random() * 3) + 1;
    // console.log(random);
    if(random === 1 ){
        return 'rock';
    }else if(random === 2){
        return 'paper';
    }else{
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log('You win');
    }else{
        console.log('You lost');
    }
}


playRound(playerSelection, computerSelection);