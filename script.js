function getComputerChoice(){
    let x = Math.floor(Math.random()*3) + 1; // 1 to 3
    if (x == 1)
        return "rock";
    else if (x == 2)
        return "scissors";
    else if(x == 3)
        return "paper";
}
function playRound(playerSelection , cpuSelection){
    if(playerSelection.toLowerCase() == "rock" && cpuSelection == "scissors"){
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if(playerSelection.toLowerCase() == "rock" && cpuSelection == "paper"){
        console.log("You Lose! Paper beats Rock");
        return 0;
    }
    else if (playerSelection.toLowerCase() == cpuSelection){
        console.log("TIE!")
        return -1;
    }
    else if (playerSelection.toLowerCase() == "scissors" && cpuSelection == "paper"){
        console.log("You Win! Scissors beats paper");
        return 1;
    }
    else if (playerSelection.toLowerCase() == "scissors" && cpuSelection == "rock"){
        console.log("You Lose! Rock beats Scissors");
        return 0;
    }
    else if (playerSelection.toLowerCase() == "paper" && cpuSelection == "rock"){
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if(playerSelection.toLowerCase() == "paper" && cpuSelection == "scissors"){
        console.log("You Lose! Scissors beats paper");
        return 0;
    }
}
function playGame(){
    console.log("Welcome To ROCK PAPER SCISSORS");
    let x;
    let score = 0 , cpuScore = 0;
    for (let i = 0; i < 5; i++){
        x = playRound(prompt("ROCK PAPER SCISSORS?") , getComputerChoice());
        if (x == 1){
            score++;
        }
        else if(x == 0){
            cpuScore++;
        }
        console.log("Your Score: " + score + "\nCPU Score: " + cpuScore);
    }
    if(score > cpuScore)
        console.log("Winner Is User");
    else if(cpuScore > score)
        console.log("Winner Is CPU");
    else 
        console.log("It Is A TIE");
}
playGame();