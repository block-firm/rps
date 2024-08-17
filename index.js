window.onload = function() {
        document.getElementById('rockButton').addEventListener('click', function() {
            playGame('rock');
        });
        document.getElementById('paperButton').addEventListener('click', function() {
            playGame('paper');
        });
        document.getElementById('scissorsButton').addEventListener('click', function() {
            playGame('scissors');
        });
    };

const score = JSON.parse(localStorage.getItem('score'));

function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.setItem('score', JSON.stringify(score));  
        alert(`Scores reset! Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
};


function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
                if(computerMove === 'rock') {
                        result = 'You Lose';
                } else if (computerMove === 'paper') {
                        result = 'You Win';
                } else if (computerMove === 'scissors') {
                        result = 'Tie';
                }
        } else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                        result = 'You Win';
                } else if (computerMove === 'scissors') {
                        result = 'You Lose';
                } else if (computerMove === 'paper') {
                        result = 'Tie';
                }
        } else if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                        result = 'Tie';
                } else if (computerMove === 'scissors') {
                        result = 'You Win';
                } else if (computerMove === 'paper') {
                        result = 'You Lose';
                }
        }

        if (result === 'You Win') {
                score.wins += 1;
        } else if (result === 'You Lose') {
                score.losses += 1;
        } else if (result === 'Tie') {
                score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
         Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) {
                computerMove = 'rock';
        } else if (randomNumber < 2/3) {
                computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
                computerMove = 'scissors';
        }

        return computerMove;
}