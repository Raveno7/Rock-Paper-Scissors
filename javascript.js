const buttons = document.querySelectorAll(".choice-btn");
const humanScoreE1 = document.querySelector(".human-score");
const computerScoreE1 = document.querySelector(".computer-score");
const roundResult = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result"); 
const rst = document.querySelector("#reset")
let humanScore = 0;
let computerScore = 0;
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const humanChoice = btn.id;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        roundResult.textContent = result;
        humanScoreE1.textContent = `Your Score: ${humanScore}`;
        computerScoreE1.textContent = `Computer Score: ${computerScore}`;
        if(humanScore === 5){
            finalResult.textContent = "You Win"
            buttons.forEach(b => b.disabled = true);
        }else if(computerScore === 5){
            finalResult.textContent = "You Lose"
            buttons.forEach(b => b.disabled = true);
        }
    })
});
rst.addEventListener('click', (event) => {
  event.preventDefault();
  humanScore = 0;
  computerScore = 0;
  humanScoreE1.textContent = `Your Score: ${humanScore}`;
  computerScoreE1.textContent = `Computer Score: ${computerScore}`;
  roundResult.textContent = '';
  finalResult.textContent = '';
  buttons.forEach(b => {
    b.disabled = false;
    b.classList.remove('selected');
  });
});


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





// function playGame(){
//     for(let i = 1; i <= 5; i++){
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     console.log("Human chose:", humanChoice);   
//     console.log("Computer chose:", computerChoice);
//     const result = playRound(humanChoice, computerChoice);
//     console.log(result);
//     console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
//     }
// }

playGame()