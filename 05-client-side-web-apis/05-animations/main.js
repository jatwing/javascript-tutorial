const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const context = canvas.getContext("2d");

context.fillStyle = "#000000";
context.fillRect(0, 0, width, height);

// draw function
let sprite = 0;
let posX = 0;

const draw = () => {
  context.fillRect(-width / 2, -height / 2, width, height);

  context.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
  if (posX % 13 === 0) {
    if (sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }

  if (posX > width / 2) {
    newStartPos = -(width / 2 + 102);
    posX = Math.ceil(newStartPos);
    console.log(posX);
  } else {
    posX += 2;
  }

  window.requestAnimationFrame(draw);
};

context.translate(width / 2, height / 2);
const image = new Image();
image.src = "../public/walk-right.png";
image.onload = draw;
