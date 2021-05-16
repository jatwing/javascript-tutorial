const spinner = document.querySelector('.spinner p');
const spinnerContainer = document.querySelector('.spinner');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

let rotateCount = 0;
let startTime = null;
let rAF;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const draw = (timestamp) => {
  if (!startTime) {
    startTime = timestamp;
  }
  rotateCount = (timestamp - startTime) / 3;
  rotateCount %= 360;
  spinner.style.transform = `rotate(${rotateCount}deg)`;
  rAF = requestAnimationFrame(draw);
};

const reset = () => {
  btn.style.display = 'block';
  result.textContent = '';
  result.style.display = 'none';
};

const handleKeyDown = (e) => {
  let isOver = false;
  if (e.key === 'a') {
    result.textContent = 'Player 1 won!!';
    isOver = true;
  } else if (e.key === 'l') {
    result.textContent = 'Player 2 won!!';
    isOver = true;
  }
  if (isOver) {
    document.removeEventListener('keydown', handleKeyDown);
    setTimeout(reset, 5000);
  }
};

const end = () => {
  cancelAnimationFrame(rAF);
  spinnerContainer.style.display = 'none';
  result.style.display = 'block';
  result.textContent = 'PLAYERS GO!!';
  document.addEventListener('keydown', handleKeyDown);
};

const start = () => {
  draw();
  spinnerContainer.style.display = 'block';
  btn.style.display = 'none';
  setTimeout(end, random(5000, 10000));
};

result.style.display = 'none';
spinnerContainer.style.display = 'none';

btn.addEventListener('click', start);
