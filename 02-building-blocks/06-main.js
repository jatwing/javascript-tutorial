const buttonColor = document.querySelector('#color');
const buttons = document.querySelectorAll('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

function bgChangeButton(e) {
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

bgChangeDiv = (e) => {
  const rndCol =
    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
};

function bgChangeDiv() {
  return rndCol;
}

const controller = new AbortController();
buttonColor.addEventListener('click', bgChange, { signal: controller.signal });
buttonColor.addEventListener('click', bgChangeButton);
controller.abort();

// event useful
for (let i = 1; i <= 16; i++) {
  const myDiv = document.createElement('div');
  myDiv.setAttribute('class', 'tile');
  document.body.appendChild(myDiv);
}
const divs = document.querySelectorAll('.tile');
divs.forEach((div) => div.addEventListener('click', bgChangeDiv));

// form
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const paraName = document.querySelector('#p-name');

const handleSubmit = (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    paraName.textContent = 'You need to fill in both names!';
  }
};
form.addEventListener('submit', handleSubmit);

// display video
const buttonVideo = document.querySelector('#button-video');
const videoBox = document.querySelector('#div-video');
const video = document.querySelector('#video');

buttonVideo.addEventListener('click', () => {
  videoBox.setAttribute('class', 'showing');
  console.log('click to show');
});

videoBox.addEventListener('click', () => {
  videoBox.setAttribute('class', 'hidden');
});

video.addEventListener('click', (e) => {
  e.stopPropagation();
  video.play();
});

// list representative
const list = document.querySelector('#list');
list.addEventListener('click', (e) => {
  console.log(e);
  alert('clicked');
});
