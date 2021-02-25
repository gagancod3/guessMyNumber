'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 25) + 1;
let score = 25;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// CHECK THE NUMBER EVENT
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number⛔';
    displayMessage('No Number⛔');
  }
  // When Player wins
  else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number! 🎉';
    displayMessage('Correct Number! 🎉');
    if (score > highScore) {
      document.querySelector('.highS').textContent = score;
    }

    // Reveals the  correct Number
    document.querySelector('.number').textContent = number;
    // change the css properties
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.color = '#111';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').style.color = '#111';
  } else if (guess !== number) {
    // When guess is different from number
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? '📈 Too High! 😜' : '📉 Too Low! 😜';
      displayMessage(guess > number ? '📈 Too High! 😜' : '📉 Too Low! 😜');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 😐';
      displayMessage('You lost the game 😐');
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too High
  /*
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High! 😜';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😐';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
  // When guess is too Low
  /*
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low! 😜';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😐';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

//CHALLENGE #1 ======== AGAIN EVENT
/* Implement a game rest functionality, so that the player can make 
 a new guess! */

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 25) + 1; //REASSIGNING NUMBER
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...?';
  displayMessage('Start guessing...?');
  document.querySelector('.message').style.color = '#eee';
  score = 25;
  document.querySelector('.score').textContent = score;

  // change the css properties
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
});
