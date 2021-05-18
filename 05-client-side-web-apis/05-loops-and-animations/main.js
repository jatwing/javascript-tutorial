const canvas = document.querySelector('.myCanvas');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const context = canvas.getContext('2d');

context.fillStyle = '#000000';
context.fillRect(0, 0, width, height);

context.translate(width / 2, height / 2);

const degToRad = (degrees) => (degrees * Math.PI) / 180;
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let length = 250;
let moveOffset = 20;

for (let i = 0; i < length; i++) {
  context.fillStyle =
    'rgba(' + (255 - length) + ', 0, ' + (255 - length) + ', 0.9)';
  context.beginPath();
  context.arc(
    moveOffset,
    moveOffset,
    rand(moveOffset - 10, moveOffset + 10),
    degToRad(0),
    degToRad(90),
    false
  );
  //  context.moveTo(moveOffset, moveOffset);
  //  context.lineTo(moveOffset + length, moveOffset);
  // let triHeight = (length / 2) * Math.tan(degToRad(60));
  //  context.lineTo(moveOffset + length / 2, moveOffset + triHeight);
  // context.lineTo(moveOffset, moveOffset);
  context.fill();

  length--;
  moveOffset += 0.7;
  context.rotate(degToRad(5));
}
