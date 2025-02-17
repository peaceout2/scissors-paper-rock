function getComputerChoice(){

    const num = Math.floor((Math.random()*3)+ 1);
    if(num === 1){
        return "scissor"
    } else if (num === 2) {
        return "paper"
    } else {
        return "rock"
    };
} 

function getHumanChoice() {

    let result =prompt("Scissor, Paper or Rock");
    if(result.toLowerCase() === "scissor") {
        return "scissor"
    } else if(result.toLowerCase() === "paper") {
        return "paper"
    } else {
        return "rock"
    };
    
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if(humanChoice === "scissor" && computerChoice === "paper"){
        console.log("You win! scissor beat paper")
        console.log(humanScore += 1)
    } else if(humanChoice === "paper" && computerChoice === "rock" ){
        console.log("You win! paper beat rock")
        console.log(humanScore += 1)
    } else if(humanChoice ==="rock" && computerChoice === "scissor"){
        console.log("You win! rock beat scissor")
        console.log(humanScore +=1)
    } else if(humanChoice === computerChoice) {
        console.log("Draw! Nobody wins")
    } else{
        console.log(`You lose!${computerChoice} beat ${humanChoice}`)
        console.log(computerScore += 1)
    }
    
}





function playGame(){

    for(let i=1;i<=5;i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        
    }
    
    if(humanScore >= 3) {
        console.log("You wins!");
    }else{
        console.log("Computer wins!");
    }

}

playGame();


