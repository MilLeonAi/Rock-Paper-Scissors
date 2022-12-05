// added event listeners for the buttons
let round = 0;
let playerWin = 0;
let computerWin = 0;
let scoreList = [round, playerWin, computerWin];
const rockbutton = document.querySelector(".rock");
const paperbutton = document.querySelector(".paper");
const scissorsbutton = document.querySelector(".scissors");
rockbutton.addEventListener("click", function() { roundList = playRound("rock", getComputerChoice(), scoreList);;});
paperbutton.addEventListener("click", function() {roundList = playRound("paper", getComputerChoice(), scoreList);});
scissorsbutton.addEventListener("click", function() {roundList = playRound("scissors", getComputerChoice(), scoreList);});

//function to capitalise the first letter of a word

function fixCase(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice)
    {
        case 1:
            return "rock"
            
        case 2:
            return "paper"
            
        case 3:
            return "scissors"
            
    }
}

// function to play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection, sL){
    while(document.querySelector(".player-choice").firstElementChild)
    {
        document.querySelector(".player-choice").firstElementChild.remove();
        document.querySelector(".computer-choice").firstElementChild.remove();
        
    }
    while(document.querySelector(".result").firstElementChild)
    {
        document.querySelector(".result").firstElementChild.remove();
    }
    // original implies it maintains it's original casing
    let originalPlayer = playerSelection;
    let originalComputer = computerSelection;
    let winCondition = true;

    // selection is all uppercase
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    // player and computer image is inserted 
    const playerImage = document.createElement("img");
    const computerImage = document.createElement("img");
    playerImage.src = `images/${originalPlayer}.png`;
    computerImage.src = `images/${originalComputer}.png`;
    playerImage.classList.add("add-image");
    computerImage.classList.add("add-image");
    document.querySelector(".player-choice").appendChild(playerImage);
    document.querySelector(".computer-choice").appendChild(computerImage);
    
    // player and computer text is inserted
    const playerText = document.createElement("p");
    const computerText = document.createElement("p");
    playerText.textContent = "PLAYER";
    computerText.textContent = "COMPUTER";
    document.querySelector(".player-choice").appendChild(playerText);
    document.querySelector(".computer-choice").appendChild(computerText);

    //score text is created and printed
    const scoreText = document.createElement("p");
    originalPlayer = fixCase(originalPlayer);
    originalComputer = fixCase(originalComputer);
    
    if (playerSelection === computerSelection)
    {
        
        scoreText.textContent = `You Tied! ${(originalPlayer)} ties with ${originalComputer}!`;

    }

    else if (playerSelection == "ROCK" && computerSelection == "PAPER")
    {
        winCondition = false;
    }

    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS")
    {
        winCondition = false;
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        winCondition = false;
    }
    // adds wins to scorelist
    if (winCondition == true)
    {
        scoreText.textContent = `You Win! ${originalPlayer} beats ${originalComputer}!`;
        sL[0]++;
        sL[1]++;
        
        

    }

    else 
    {
        scoreText.textContent = `You Lose! ${originalComputer} beats ${originalPlayer}!`;
        sL[0]++;
        sL[2]++;
        
        
        
    }
    // final to tabulate the results
    if(sL[0] >= 5)
        {
            if (sL[1] > sL[2])
            {
                scoreText.textContent += "\nCongratulations, you won!"
            }
            else
            {
                scoreText.textContent += "\nOh no, you lost!"
            }
            sL[0] = sL[1] = sL[2] = 0;
        }
    document.querySelector(".result").appendChild(scoreText)
    return sL;

    
}
// function to play a 5 round game (kind of useless)
function game(){
    computerLog = 0;
    playerLog = 0;
    let playerChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++)
    {
        playerChoice = prompt("Rock Paper, Scissors? ")
        computerChoice = getComputerChoice();
        switch (playRound(playerChoice, computerChoice))
        {
            case 0:
                break;
            case 1:
                playerLog++;
                break;
            case 2:
                computerLog++;
                break;
        }

    }

    console.log(`Player Wins:${playerLog}  Computer Wins:${computerLog}`)
}   


