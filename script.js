'use strict';
let score = 20;
let highscore = 0;
let numberCorect = Math.trunc(Math.random() * 20);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.number').value = numberCorect;
document.querySelector('.check').addEventListener('click', function () {
  const valueBtn = Number(document.querySelector('.guess').value);
  if (!valueBtn) {
    displayMessage('No Number ⛔');
  } else if (valueBtn === numberCorect) {
    displayMessage('You chose true ✔');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(numberCorect);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (valueBtn !== numberCorect) {
    displayMessage(valueBtn > numberCorect ? 'Too Height ↗' : 'Too Low ↘');
    score--;
    displayScore(score);
  } else {
    displayMessage('End game');
    displayScore(0);
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberCorect = Math.trunc(Math.random() * 20);
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
});
