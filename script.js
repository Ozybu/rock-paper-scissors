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
    if (humanChoice===computerChoice) return 0;

    else if (humanChoice==="paper"){
        if (computerChoice==="scissors") return 1;
        else if(computerChoice==="rock") return 2;
    }

    else if(humanChoice==="rock"){
        if(computerChoice==="paper") return 1;
        else if(computerChoice==="scissors") return 2;

    }

    else if(humanChoice==="scissors"){
        if(computerChoice==="rock") return 1;
        else if(computerChoice==="paper") return 2;
    }
}


function playGame(rounds){
    let humanScore=0,computerScore=0;
    for(let i=0; i<rounds; i++){
        let val=playRound(getHumanChoice(),getComputerChoice());
        switch (val){
            case 0:
                {console.log("draw, no winner")}
                break;
            case 1:
                {computerScore++; console.log("computer won")}
                break;
            case 2:
                {humanScore++; console.log("human won")}
                break;
            }
    }   
    console.log(humanScore + " " + computerScore)

}

playGame(5)