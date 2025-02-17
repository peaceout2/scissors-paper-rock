function getComputerChoice(){

    const num = Math.floor((Math.random()*3)+ 1);
    
    let techChoice;

    if(num === 1){
       techChoice =  "rock";
    } else if (num === 2) {
        techChoice = "paper";
    } else {
        techChoice = "rock"
    };

    return techChoice;
} 

function getHumanChoice() {

    let userChoice =prompt("Scissor, Paper or Rock");
    
    return userChoice;
    
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    humanChoiceNew = humanChoice.toLowerCase();

    if(humanChoiceNew === "scissor" && computerChoice === "paper"){
        console.log("You win! scissor beat paper")
        console.log(humanScore += 1)
    } else if(humanChoiceNew === "paper" && computerChoice === "rock" ){
        console.log("You win! paper beat rock")
        console.log(humanScore += 1)
    } else if(humanChoiceNew ==="rock" && computerChoice === "scissor"){
        console.log("You win! rock beat scissor")
        console.log(humanScore +=1)
    } else if(humanChoiceNew === computerChoice) {
        console.log("Draw! Nobody wins")
    } else{
        console.log(`You lose!${computerChoice} beat ${humanChoice}`)
        console.log(computerScore += 1)
    }
    
}





function playGame(){

    for(let i=1;i<=5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        
    }
    
    if(humanScore >= 3) {
        console.log("You wins!");
    }else{
        console.log("Computer wins!");
    }

}

playGame();


