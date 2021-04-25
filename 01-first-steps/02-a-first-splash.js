const formInputs = document.querySelectorAll('.form input');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const resultParas = document.querySelectorAll('.resultParas p');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let randomNumber, turnNumber;

guessSubmit.addEventListener('click', checkGuess);
let resetButton = document.createElement('button');
resetButton.textContent = 'Restart the game';
resetButton.addEventListener('click', startGame);

startGame();

function startGame() {
  formInputs.forEach((input) => (input.disabled = false));
  guessField.focus();
  resultParas.forEach((p) => (p.textContent = ''));
  lastResult.style.backgroundColor = 'white';
  if (document.body.contains(resetButton)) {
    document.body.removeChild(resetButton);
  }

  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  turnNumber = 1;
}

function checkGuess() {
  const guessNumber = Number(guessField.value);
  guessField.value = null;
  if (!guessNumber || isNaN(guessNumber)) {
    alert('Please enter a number!');
    return;
  }
  if (turnNumber === 1) {
    guesses.textContent = 'Previous guesses:';
  }
  guesses.textContent += ' ' + guessNumber;
  if (guessNumber == randomNumber) {
    setGameOver(true);
    return;
  }
  if (turnNumber === 10) {
    setGameOver(false);
    return;
  }
  lastResult.textContent = 'Wrong!';
  lastResult.style.backgroundColor = 'red';
  if (guessNumber < randomNumber) {
    lowOrHi.textContent = 'Last guess was too low';
  } else {
    lowOrHi.textContent = 'Last guess was too high';
  }
  turnNumber += 1;
  guessField.focus();
}

function setGameOver(successful) {
  formInputs.forEach((input) => (input.disabled = true));
  if (successful) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
  } else {
    lastResult.textContent = '!!!GAME OVER!!!';
    lastResult.style.backgroundColor = 'red';
  }
  lowOrHi.textContent = '';
  document.body.appendChild(resetButton);
}
