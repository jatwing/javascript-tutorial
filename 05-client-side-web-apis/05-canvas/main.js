const canvas = document.querySelector('.myCanvas');

// different from using css, using js is before render the canvas

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const context = canvas.getContext('2d');

// simple rectangles
context.fillStyle = '#000000';
context.fillRect(0, 0, width, height);

context.fillStyle = '#ff0000';
context.fillRect(50, 50, 100, 150);

context.fillStyle = '#00ff00';
context.fillRect(75, 75, 100, 100);

context.fillStyle = '#ff00ff';
context.globalAlpha = 0.75;
context.fillRect(25, 100, 175, 50);
// strokes and line widths
context.strokeStyle = '#ffffff';
context.globalAlpha = 1;
context.lineWidth = 5;
context.strokeRect(25, 25, 175, 200);

// lines

const degToRad = (degrees) => (degrees * Math.PI) / 180;
context.fillStyle = '#ff0000';
context.beginPath();
context.moveTo(350, 50);
context.lineTo(450, 50);
const triHeight = 50 * Math.tan(degToRad(60));
context.lineTo(400, 50 + triHeight);
context.lineTo(350, 50);
context.fill();

// circles
context.fillStyle = '#0000ff'
context.beginPath()
context.arc(450, 106, 50, degToRad(0), degToRad(360), false)
context.fill()
context.fillStyle = '#ffff00'

context.beginPath()
context.arc(500, 106, 50, degToRad(-45), degToRad(45), true)
context.lineTo(500, 106)
context.fill()

// text
context.strokeStyle = 'white'
context.lineWidth = 1
context.font = '36px ariel'
context.strokeText('Canvas text', 50, 350)

context.fillStyle = 'red'
context.font = '48px georgia'
context.fillText('Canvas text', 50, 450)

// images
let image = new Image()
image.src = '../public/firefox.png'
image.onload = () => {
  context.drawImage(image, 20, 20, 185, 175, 350, 350, 185, 175)
}











