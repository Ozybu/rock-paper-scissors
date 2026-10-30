let rockCount= 0,paperCount= 0,scissorsCount = 0;
for(let i=0; i<10000; i++){
    getComputerChoice();
}

console.log(rockCount, paperCount, scissorsCount)

function getComputerChoice(){
    let caseNum= Math.floor(Math.random()*3);
    switch (caseNum){
        case 0:
            rockCount++;
            return "rock";
            break;
        case 1:
            paperCount++;
            return "paper";
            break;
        case 2:
            scissorsCount++;
            return "scissors";
            break;
    }
}