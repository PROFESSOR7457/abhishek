'use strict';

let score = 20;
let highScore = 0;

// Functions Defined
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numWidth = function (value) {
  document.querySelector('.number').style.width = value;
};

const secNum = function () {
  const secNum = Math.trunc(Math.random() * 20) + 1;
  return secNum;
};

const numDisplay = function (value) {
  document.querySelector('.number').textContent = value;
};

const bodyColor = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};

const scoreFn = function (value) {
  document.querySelector('.score').textContent = value;
};

let secretNumber = secNum();

numDisplay('?');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No Number !`);

    // Player Wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number !`);

    bodyColor('#60b347');

    numWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    numDisplay(secretNumber);
    // When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too High !` : `📉 Too Low !`);

      score--;
      scoreFn(score);
    } else {
      displayMessage(`💥 You lose the game !`);
      scoreFn(0);
    }
  }
});

// Play again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = secNum();
  displayMessage(`Start guessing...`);
  scoreFn(score);
  numDisplay('?');
  bodyColor('#222');
  numWidth('15rem');
});
