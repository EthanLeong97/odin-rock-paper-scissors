function getComputerChoice() {
    let legalPlays = ['Rock', 'Paper', 'Scissors'];
    randomNumber = Math.floor(Math.random() * 3);
    return legalPlays[randomNumber]
}

// here we intentionally invoke the default parameter because we want the return value, not the function itself
function playRound (playerChoice, cpuChoice=getComputerChoice()) {
    if (playerChoice === 'Rock') {
        switch (cpuChoice) {
            case 'Rock':
                text.textContent = 'Rock vs. Rock. Tie!';
                return 'tie'
            case 'Paper':
                text.textContent = 'Paper beats Rock. You lose!';
                return 'lose'
            case 'Scissors':
                text.textContent = 'Scissors loses to Rock. You Win!';
                return 'win'
        }
    }

    else if (playerChoice === 'Paper') {
        switch (cpuChoice) {
            case 'Rock':
                text.textContent = 'Rock loses to paper. You Win!';
                return 'win'
            case 'Paper':
                text.textContent = 'Paper vs. Paper. Tie!';
                return 'tie'
            case 'Scissors':
                text.textContent = 'Scissors beats Paper. You Lose!';
                return 'lose'
        }
    }

    else if (playerChoice === 'Scissors') {
        switch (cpuChoice) {
            case 'Rock':
                text.textContent = 'Rock beats Scissors. You Lose!';
                return 'lose'
            case 'Paper':
                text.textContent = 'Paper loses to Scissors. You Win!';
                return 'win'
            case 'Scissors':
                text.textContent = 'Scissors vs. Scissors. Tie!';
                return 'tie'
        }
    }

    else {
        return 'wat'
    }
}

function playGame(points) {
    let playerScore = 0;
    let cpuScore = 0;
    let round = 1;
    let result = '';

    /* creates the event function named game for each button
    note that it is a node list so every node needs to be assigned the event using for each */
    buttons.forEach(button => button.addEventListener('click', function game(event) {
        // note that a while loop here is bad because we would be asking for a new loop everytime we click
        
        if (playerScore === points || cpuScore === points) {
            playerScore > cpuScore ? final.textContent = "Player win!" : final.textContent = "CPU win!";
            /* can use .remove() to get rid of the buttons
            https://stackoverflow.com/questions/23893872/how-to-properly-remove-event-listeners-in-node-js-eventemitter
            note that the function needs to be named so the event listener can be located in memory removed*/
            buttons.forEach(button => button.removeEventListener('click', game));
            // need to make a return AND have this if statement here or the game still allows the user to click options
            return 'game over'
        }

        result = playUsingEventId(event);
        switch (result) {
            case 'win':
                playerScore += 1;
                break;
            case 'lose':
                cpuScore += 1;
                break;
        }
        score.textContent = (`Round ${round}. Player: ${playerScore}, CPU: ${cpuScore}`);
        round += 1;
    }));
}

function playUsingEventId(event) {
    return playRound(event.target.getAttribute('id'));
}

// keep these here of in function?
const text = document.querySelector('.text');
const score = document.querySelector('.score');
const final = document.querySelector('.final');
const buttons = document.querySelectorAll(".move");

playGame(5);
