
function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice)
    {
        case 1:
            return "Rock"
            
        case 2:
            return "Paper"
            
        case 3:
            return "Scissors"
            
    }
}


function playRound(playerSelection, computerSelection){
    let originalPlayer = playerSelection;
    let originalComputer = computerSelection;
    let winCondition = true;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection)
    {
        console.log(`You Tied! ${originalPlayer} ties with ${originalComputer}!`);
        return 0;

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

    if (winCondition == true)
    {
        console.log(`You Win! ${originalPlayer} beats ${originalComputer}!`);
        return 1;
    }

    else 
    {
        console.log(`You Lose! ${originalComputer} beats ${originalPlayer}!`);
        return 2;
    }

    
}

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





