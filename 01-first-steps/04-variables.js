const button = document.body.querySelector('button');
button.onclick = function () {
  let name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
};

let myName, myAge;
console.log(myName, myAge);
// console.log(scoobyDoo)

myName = 'Chris';
myAge = 37;
console.log(myName, myAge);
let myDog = 'Rover';

var foo = 'Chris';
console.log(foo);
var foo = 'Bob';
console.log(foo);

let bar = 'Chris';
// let bar = 'Bob'
bar = 'Bob';

myName = 'Bob';
myAge = 40;

let dolphinGoodbye = 'So long and thanks for all the fish';
let iAmAlive = true;
let test = 6 < 3;
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
console.log(myNameArray[0], myNumberArray[2]);
let dog = { name: 'Spot', breed: 'Dalmatian' };
console.log(dog.name);

let myNumber = '500';
console.log(typeof myNumber);
myNumber = 500;
console.log(typeof myNumber);

const daysInWeek = 7;
const hoursInDay = 24;
// daysInWeek = 8;
