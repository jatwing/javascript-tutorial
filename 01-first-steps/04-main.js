const button = document.body.querySelector('button');
button.onclick = function () {
  let name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
};
