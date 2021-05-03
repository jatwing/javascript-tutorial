const input = document.querySelector('.numberInput');
const paraFoo = document.querySelector('#foo');
const paraBar = document.querySelector('#bar');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

function squareRoot(num) {
  if (isNaN(num) || num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}

function cubeRoot(num) {
  if (isNaN(num)) {
    return undefined;
  }
  return Math.cbrt(num);
}

function circumference(num) {
  if (isNaN(num) || num < 0) {
    return undefined;
  }
  return 2 * Math.PI * num;
}

input.onchange = function () {
  const num = input.value;
  if (isNaN(num)) {
    paraFoo.textContent = 'You need to enter a number!';
  } else {
    paraFoo.textContent = `${num} squared is ${squared(num)}.
      ${num} cubed is ${cubed(num)}.
      ${num} factorial is ${factorial(num)}.`;

    paraBar.textContent = `Square root of ${num} is ${squareRoot(num)}.
      Cube root of ${num} is ${cubeRoot(num)}.
      Circumference of circle with radius ${num} is ${circumference(num)}.`;
  }
};
