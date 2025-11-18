let humanScore = 0 ;
let computerScore = 0;


function getComputerChoice(){
    const choices = ['rock','paper','scissors'] ;
    return choices[Math.floor(Math.random()*3)] ;
}

function getHumanChoice(){
    let human = prompt('Enter your choice') ;
    human = human.toLowerCase() ;
    return human ;
}

function playRound(humanChoice, computerChoice){
    if( humanChoice == computerChoice){
        console.log('This round is a tie !') ;
        return ;
    }
    if((humanChoice == 'rock' && computerChoice =='scissors') ||
    (humanChoice == 'scissors' && computerChoice == 'paper') ||
    (humanChoice == 'paper' && computerChoice == 'rock')){
        console.log("Human won this round !")
        humanScore += 1 ;
    } else{
        console.log("Computer won this round !")
        computerScore += 1 ;

    }
}


for(i=0;i<3;i++){
    let humanChoice = getHumanChoice() ;
    let computerChoice = getComputerChoice() ;
    playRound(humanChoice, computerChoice) ;
}

if(humanScore > computerScore) {
    console.log('Human Won !!') ;
}
else if( humanScore < computerScore ){
    console.log('Computer Won !') ;
}
else{
    console.log("Sad day..NOBODY WON !!") ;
}