/*
 * Web Audio API
 */
// Create an AudioContext (cross browser)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// store references to our HTML elements
const audioElement = document.querySelector('audio');
const playBtn = document.querySelector('button');
const volumeSlider = document.querySelector('.volume');

// load the audio source into our audio graph
const audioSource = audioCtx.createMediaElementSource(audioElement);

// play/pause audio
playBtn.addEventListener('click', function () {
  // check if context is in suspended state (autoplay policy)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // if track is stopped, play it
  if (this.getAttribute('class') === 'paused') {
    audioElement.play();
    this.setAttribute('class', 'playing');
    this.textContent = 'Pause';
    // if track is playing, stop it
  } else if (this.getAttribute('class') === 'playing') {
    audioElement.pause();
    this.setAttribute('class', 'paused');
    this.textContent = 'Play';
  }
});

// if track ends
audioElement.addEventListener('ended', function () {
  playBtn.setAttribute('class', 'paused');
  playBtn.textContent = 'Play';
});

// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener('input', function () {
  gainNode.gain.value = this.value;
});

// connect our graph
audioSource.connect(gainNode).connect(audioCtx.destination);

// Track credit: Outfoxing the Fox by Kevin MacLeod under Creative Commons

/*
 * DOM API
 */
const em = document.createElement('em'); // create a new em element
const para = document.getElementById('greeting'); // reference an existing p element
em.textContent = 'Hello there!'; // give em some text content
para.appendChild(em); // embed em inside para

/*
 * Canvas API
 */
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.beginPath();
context.fillStyle = 'black';
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.fill();

/*
 * XMLHttpRequest
 */
const heroes = document.getElementById('heroes');

let requestURL =
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  const superHeroes = request.response;
  heroes.textContent = JSON.stringify(superHeroes);
};
