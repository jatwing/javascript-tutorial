const myButton = document.querySelector('button');
const myGreeting = function () {
  alert('hello');
};
let anotherGreeting = myGreeting;
// myGreeting();
// anotherGreeting();
myButton.onclick = function () {
  alert('hello');
};
