function getComputerChoice(){

    const num = Math.floor((Math.random()*3)+ 1);
    if(num === 1){
        return "Scissor"
    } else if (num === 2) {
        return "Paper"
    } else {
        return "Rock"
    };
} 

console.log(getComputerChoice())


