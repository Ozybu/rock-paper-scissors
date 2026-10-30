function getComputerChoice(){
    let caseNum= Math.floor(Math.random()*3);
    switch (caseNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    return String(prompt("What is your choice?"));
}

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice===computerChoice) return;

    if (humanChoice==="paper"){
        if (computerChoice==="scissors") computerScore++;
        else if(computerChoice==="rock") humanScore++;
    }
    else if(humanChoice==="rock"){
        if(computerChoice==="paper") computerScore++;
        else if(computerChoice==="scissors") humanScore++;

    }
    else if(humanChoice==="scissors"){
        if(computerChoice==="rock") computerScore++;
        else if(computerChoice==="paper") humanScore++;
    }
}

function playGame(rounds){
    for(let i=0; i<1; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

}

let humanScore=0, computerScore=0;
playGame(5)