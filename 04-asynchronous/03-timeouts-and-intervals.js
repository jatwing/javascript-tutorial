// timeout

const sayHi = (who) => {
  console.log(`Hello ${who}!`);
};
// the third para, pass to the first para (callback function)
const myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
clearTimeout(myGreeting);

// interval
const displayTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
};

const createClock = setInterval(displayTime, 1000);
clearInterval(createClock);

// recursive timeouts
let i = 1;
let count = null;
const run = () => {
  console.log(i);
  i++;
  count = setTimeout(run, 1000);
};
count = setTimeout(run, 1000);
clearInterval(count);
// compared with interval

let j = 1;
const countingInterval = setInterval(() => {
  console.log(j);
  j++;
}, 100);
clearInterval(countingInterval);

// immediate timeouts
const immediateTimeouts = setTimeout(() => {
  console.log('World');
}, 0);
console.log('Hello');
