'use strict';

//Defining secret number that the user must guess from.
let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

//!Using an event listener when user clicks 
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if (!guess) {
        displayMessage('⛔️ No Number!')

     // When the player wins the game.
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        // Background turns green when the user wins the game.
        document.querySelector('body').style.backgroundColor = '#60b347';

        // Size of the number box increases when user wins the game.
        document.querySelector('.number').style.width = '30rem'

        // Set for highscore when the user wins and get highscore.
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
     // When guess is wrong.
    }else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Number too high!' : '📉 Number too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😖 You lost the game!';
            displayMessage('😖 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } 
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
});