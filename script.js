let legalPlays = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    return legalPlays[randomNumber]
}

function getPlayerSelection() {
    let playerChoice = prompt('Enter the name of your play or the corresponding number!\nRock (0), Paper (1), Scissors (2).\n\nWhat will you play?');
    
    // switch statements that convert input to a number
    let selection = null;
    switch (playerChoice.toLowerCase()) {
        case 'rock':
            selection = 0;
            break;
        case 'paper':
            selection = 1;
            break;
        case 'scissors':
            selection = 2;
    }

    // assign player selection if valid
    if (selection != null) {
        return legalPlays[selection]
    }

    // allow use of numbers by checking if input is 0, 1, or 2
    if (!isNaN(playerChoice) && playerChoice >= 0 && playerChoice < 3) {
        // convert to number and assign legalPlays
        playerChoice = +playerChoice
        return legalPlays[playerChoice]
    }

    // error case
    else {
        console.log('Invalid input. Default to Rock.')
        return legalPlays[0]
    }

}

// defined both functions and use as default parameters 
function playGame (cpuChoice=getComputerChoice(), playerChoice=getPlayerSelection()) {

    // if for each player choice. switch nested for each possible computer choice
    if (playerChoice === 'Rock') {
        switch (cpuChoice) {
            case 'Rock':
                console.log('Rock vs. Rock. Tie!');
                return 'tie'
            case 'Paper':
                console.log('Paper beats Rock. You lose!');
                return 'lose'
            case 'Scissors':
                console.log('Scissors loses to Rock. You Win!');
                return 'win'
        }
    }

    else if (playerChoice === 'Paper') {
        switch (cpuChoice) {
            case 'Rock':
                console.log('Rock loses to paper. You Win!');
                return 'win'
            case 'Paper':
                console.log('Paper vs. Paper. Tie!');
                return 'tie'
            case 'Scissors':
                console.log('Scissors beats Paper. You Lose!');
                return 'lose'
        }
    }

    else if (playerChoice === 'Scissors') {
        switch (cpuChoice) {
            case 'Rock':
                console.log('Rock beats Scissors. You Lose!');
                return 'lose'
            case 'Paper':
                console.log('Paper loses to Scissors. You Win!');
                return 'win'
            case 'Scissors':
                console.log('Scissors vs. Scissors. Tie!');
                return 'tie'
        }
    }


    else {
        return 'wat'
    }
}


function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; i < 5; i++) {
        result = playGame();
        switch (result) {
            case 'win':
                playerScore += 1;
                break;
            case 'lose':
                cpuScore += 1;
                break;
        }
        console.log(`Round ${i+1}. Player: ${playerScore}, CPU: ${cpuScore}`)
        console.log(' ')
    }

    if (playerScore === cpuScore) {
        return 'Tie!'
    }
    return playerScore > cpuScore ? 'You win the game!' : 'You lose the game!'
}

console.log(game())

