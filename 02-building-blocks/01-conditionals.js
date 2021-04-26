let shoppingDone = false;
let childsAllowance;
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance);

let cheese = 'Cheddar';
if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}

let iceCreamVanOutside = false;
let houseStatus = 'on fire';
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}

let isBirthday = false;
let greeting = isBirthday
  ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
  : 'Good morning Mrs. Smith.';
