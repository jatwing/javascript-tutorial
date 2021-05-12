const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomColor = () =>
  `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

class Ball {
  constructor(x, y, velX, velY, color, radius) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.radius = radius;
  }

  static create() {
    const radius = random(10, 20);
    return new Ball(
      random(radius, width - radius),
      random(radius, height - radius),
      random(-7, 7),
      random(-7, 7),
      randomColor(),
      radius
    );
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
      this.velX = -this.velX;
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= height) {
      this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
  }

  detectCollision() {
    balls.forEach((b) => {
      if (this === b) {
        return;
      }
      const dx = this.x - b.x;
      const dy = this.y - b.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.radius + b.radius) {
        b.color = this.color = randomColor();
      }
    });
  }
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let balls = [];
while (balls.length < 25) {
  balls.push(Ball.create());
}

function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, width, height);
  balls.forEach((b) => {
    b.draw(ctx);
    b.update();
    b.detectCollision();
  });
  requestAnimationFrame(loop);
}
loop();
