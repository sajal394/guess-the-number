'use strict';
/*
console.log(document.querySelector('.message').textContent);
const x = 23;
console.log(x);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when player does not enter a number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when player enter a number higher than the secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number is too high';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent =
        "You've used all your tries";
      document.querySelector('.score').textContent = 0;
    }

    //when player enter a number lower than the secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'number is too low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent =
        "You've used all your tries";
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing......';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
