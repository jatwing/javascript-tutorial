let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);

let myNumber = Math.random();
console.log(myNumber);

function random(number) {
  return Math.floor(Math.random() * number);
}
console.log(random(7));
