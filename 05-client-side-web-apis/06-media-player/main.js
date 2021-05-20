const media = document.querySelector('video');
const controls = document.querySelector('.controls');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');

const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

/*
play and pause
*/
const playPauseMedia = () => {
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);

  if (media.paused) {
    play.setAttribute('data-icon', 'u');
    media.play();
  } else {
    play.setAttribute('data-icon', 'P');
    media.pause();
  }
};
play.addEventListener('click', playPauseMedia);

/*
stop
*/
const stopMedia = () => {
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);

  media.pause();
  media.currentTime = 0;
  play.setAttribute('data-icon', 'P');
};
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

/*
seek back and forth
*/
let intervalFwd;
let intervalRwd;
const windBackward = () => {
  if (media.currentTime <= 3) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
};
const windForward = () => {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
};

const mediaBackward = () => {
  clearInterval(intervalFwd);
  fwd.classList.remove('active');
  if (rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
};
const mediaForward = () => {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');
  if (fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
};

/*
update elapsed time
*/
const setTime = () => {
  let minutes = Math.floor(media.currentTime / 60);
  let seconds = Math.floor(media.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }

  let mediaTime = minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;

  let barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = barLength + 'px';
};
media.addEventListener('timeupdate', setTime);

// at last
media.removeAttribute('controls');
controls.style.visibility = 'visible';
