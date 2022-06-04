
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
       return "you won";
    }else{
       return "you lost";
    }
}

function game(){

    let userCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt('Rock, paper or scissors');
        var res = playRound(playerSelection, computerSelection);

        if(res === 'you won'){
            userCount++;
        }else{
            computerCount++;
        }
    }

    console.log('SCORES: ' + userCount + ' - ' + computerCount);

    if(userCount > computerCount){
        console.log("you won");
    }else{
        console.log("you lost");
    }
    
    
}


game();

