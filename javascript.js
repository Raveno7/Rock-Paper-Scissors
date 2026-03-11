let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 1){
        return "rock";
    }else if(computer === 2){
        return "paper"
    }else {
        return "scissors";
    }
};



function getHumanChoice(){
    const validChoices = ["rock", "paper", "scissors"];
    const choice = prompt("What is your choice? (rock, paper, scissors)").toLowerCase();
    if (!validChoices.includes(choice)){
        console.log("Invalid choice! Please enter rock, paper or scissors.");
        return getHumanChoice();
    }
    return choice;
}



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a draw";
    }else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        return`You win! ${humanChoice} beats ${computerChoice}`;
        
    }else{
        computerScore++
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
        
    }
}





function playGame(){
    for(let i = 1; i <= 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Human chose:", humanChoice);   
    console.log("Computer chose:", computerChoice);
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
    }
}

playGame()