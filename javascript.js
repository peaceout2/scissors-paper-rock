// Game

function getComputerChoice(){
    const num = Math.floor((Math.random()*3)+ 1);

    let choice;
    if(num === 1){
       choice =  "rock";
    } else if (num === 2) {
        choice = "paper";
    } else {
        choice = "rock"
    };

    return choice;
} 

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const paperBtn = document.createElement("button");

rockBtn.textContent = "rock";
scissorBtn.textContent = "scissors";
paperBtn.textContent = "paper";

document.body.appendChild(rockBtn);
document.body.appendChild(scissorBtn);
document.body.appendChild(paperBtn);

const resultDisplay = document.querySelector("#result-display");

rockBtn.addEventListener("click", () => {
    playRound("rock");
});
scissorBtn.addEventListener("click", () => {
    playRound("scissors");
});
paperBtn.addEventListener("click", () => {
    playRound("paper");
});


function playRound(playerSelection){

    // tallying result score
    if(humanScore === 5 || computerScore ===5 ) {
       
       let endMessage = humanScore === 5
        ? `You win! <br><br> 
           Human Score: ${humanScore} Computer Score: ${computerScore} <br> 
            Reload to play again!`
        : `Computer win! <br><br> 
            Human Score: ${humanScore} Computer Score: ${computerScore} <br> 
            Reload to play again!`;
       
        resultDisplay.innerHTML = `<p> ${endMessage} </p>`; 
        return;   
    } 

    newPlayerSelection = playerSelection.toLowerCase();
    computerChoice = getComputerChoice();

    let resultMessage = " ";
    

    if(newPlayerSelection === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        resultMessage = "You win! scissors beat paper <br><br>" +
                        `HumanScore: ${humanScore} ComputerScore: ${computerScore}`;
        resultDisplay.innerHTML = `<p> ${resultMessage} </p>`;

    } else if(newPlayerSelection === "paper" && computerChoice === "rock" ){
        humanScore += 1;
        resultMessage = "You win! paper beat rock <br><br> " +
                        `HumanScore: ${humanScore} ComputerScore: ${computerScore}`;
        resultDisplay.innerHTML = `<p> ${resultMessage} </p>`;

    } else if(newPlayerSelection ==="rock" && computerChoice === "scissors"){
         humanScore +=1;
         resultMessage = "You win! rock beat scissors <br><br>" +
                        `HumanScore: ${humanScore} ComputerScore: ${computerScore}`;
        resultDisplay.innerHTML = `<p> ${resultMessage} </p>`;

    } else if(newPlayerSelection === computerChoice) {
        resultMessage = "Draw! Nobody wins <br><br>" + 
                        `HumanScore: ${humanScore} ComputerScore: ${computerScore}`;
        resultDisplay.innerHTML = `<p> ${resultMessage} </p>`;

    } else{
        computerScore += 1;
        resultMessage = `You lose! ${computerChoice} beat ${newPlayerSelection} <br><br>
                        HumanScore: ${humanScore} ComputerScore: ${computerScore}`;
        resultDisplay.innerHTML = `<p> ${resultMessage} </p>` ;
      
    }
      
}   


