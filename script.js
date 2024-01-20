'use strict';

let select = document.querySelector('.check');
let message = document.querySelector('.message');
let heddinNumber = document.querySelector('.number');
let scoreGame = document.querySelector('.score');
let again = document.querySelector('.again');
let guess = 0;
let score = 20;
let highScore = 0;

// defiane a random number between 1 ~ 20!
let randNumber = Math.trunc(Math.random() * 20 + 1);

// check guess input from user
guess = Number(document.querySelector('.guess').value);

// add action when click on check button
select.addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  //   for false value

  if (!guess) {
    // no number chosen
    message.textContent = 'no number!';
  } else if (guess === randNumber) {
    // correct number
    message.textContent = 'correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    heddinNumber.textContent = randNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //   number is high
  else if (guess > randNumber) {
    if (score > 0) {
      message.textContent = 'too high!';
      score--;
      scoreGame.textContent = score;
    } else {
      message.textContent = 'you lose!';
    }
    //   number is low
  } else if (guess < randNumber) {
    if (score > 0) {
      message.textContent = 'too low!';
      score--;
      scoreGame.textContent = score;
    } else {
      message.textContent = 'you lose!';
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  scoreGame.textContent = score;
  randNumber = Math.trunc(Math.random() * 20 + 1);
  heddinNumber.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
});
