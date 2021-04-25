let string = 'The revolution will not be televised.';
console.log(string);
/*
let badString1 = This is a test;
let badString2 = 'This is a test;
let badString3 = This is a test';
*/
let badString = string;
badString;

let sgl = 'Single quotes.';
let dbl = 'Double quotes';
console.log(sgl, dbl);
// let badQuotes = 'What on earth?";
let sglDbl = 'Would you eat a "finsh supper"?';
let dblSgl = "I'm feeling blue.";
console.log(sglDbl, dblSgl);
// let badBigMouth = 'I've got no right to take my place'
let bigMouth = "I've got no right to take my place...";
console.log(bigMouth);

let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
console.log(joined);
let multiple = one + one + one + one + two;
console.log(multiple);
let response = one + 'I am fine - ' + two;
console.log(response);

console.log('Front ' + 242);
let myDate = '19' + '67';
console.log(typeof myDate);
let myString = '123';
let myNum = Number(myString);
console.log(typeof myNum);
let myNum2 = 123;
let myString2 = myNum2.toString();
console.log(typeof myString2);

let song = 'Fight the Youth';
console.log(song);
song = `Fight the Youth`;
console.log(song);
let score = 9;
let highestScore = 10;
let output =
  'I like the song "' +
  song +
  '".\nI gave it a score of ' +
  (score / highestScore) * 100 +
  '%.';
console.log(output);
output = `I like the song "${song}".
I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${examScore}/${examHighestScore} (${Math.round(
  (examScore / examHighestScore) * 100
)}%). ${
  examScore >= 49
    ? 'Well done, you passed!'
    : "Bad luck, you didn't pass this time."
}`;
console.log(examReport);
