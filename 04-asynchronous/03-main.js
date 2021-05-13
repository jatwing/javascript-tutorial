const clock = document.getElementById("clock");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");

let startTime = 0;
let savedTime = 0;
let interval = null;

const formatNumber = (number) =>
  number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

const formatTime = (timeInMilliseconds) => {
  const timeInSeconds = timeInMilliseconds / 1000;
  const hour = Math.floor(timeInSeconds / 3600);
  const minute = Math.floor((timeInSeconds - hour * 3600) / 60);
  const second = Math.floor(timeInSeconds - hour * 3600 - minute * 60);
  return `${formatNumber(hour)} : ${formatNumber(minute)} : ${formatNumber(
    second
  )}`;
};

const displayTime = (startTime) => {
  const time = Math.floor(Date.now() - startTime + savedTime);
  clock.textContent = formatTime(time);
};

const onClickStart = () => {
  startTime = Date.now();
  interval = setInterval(displayTime, 1000, startTime);
  // button
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  buttonReset.disabled = false;
};

const onClickStop = () => {
  clearInterval(interval);
  savedTime += Date.now() - startTime;
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonReset.disabled = false;
};

const onClickReset = () => {
  clearInterval(interval);
  clock.textContent = formatTime(0);
  savedTime = 0;
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonReset.disabled = true;
};

clock.textContent = formatTime(0);
buttonStop.disabled = true;
buttonReset.disabled = true;
buttonStart.addEventListener("click", onClickStart);
buttonStop.addEventListener("click", onClickStop);
buttonReset.addEventListener("click", onClickReset);
