let myInt = 5;
let myFloat = 6.667;
console.log(myInt, myFloat);
console.log(typeof myInt, typeof myFloat);

let lotsOfDecimal = 1.766584958675746364;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(lotsOfDecimal, twoDecimalPlaces);

let myNumber = '74';
console.log(myNumber + 3, Number(myNumber) + 3);

console.log(10 + 7, 9 * 8, 60 % 3);
let num1 = 10;
let num2 = 50;
console.log(9 * num1, num1 ** 3, num2 / num1);
console.log(5 + 10 * 3, (num2 % 9) * num1);
console.log(num2 + num1 / 8 + 2, (num2 + num1) / (8 + 2));

num1 = 4;
num1++;
num2 = 6;
num2--;
console.log(num1, num2);

let x = 3;
let y = 4;
x = y;
x *= y;

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
