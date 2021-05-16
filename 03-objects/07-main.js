const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomColor = () =>
  `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

class Shape {
  constructor(x, y, velX, velY, alive) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.alive = alive;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, alive, color, radius) {
    super(x, y, velX, velY, alive);
    this.color = color;
    this.radius = radius;
  }

  static create(width, height) {
    const radius = random(10, 20);
    return new Ball(
      random(radius, width - radius),
      random(radius, height - radius),
      random(-7, 7),
      random(-7, 7),
      true,
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
      if (!b.alive || this === b) {
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

class EvilCircle extends Shape {
  constructor(x, y, alive) {
    super(x, y, 0, 0, alive);
    this.color = 'white';
    this.radius = 10;
  }

  static create(width, height) {
    const radius = random(10, 20);
    return new EvilCircle(
      random(radius, width - radius),
      random(radius, height - radius),
      true
    );
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  update() {
    if (this.x - this.radius <= 0) {
      this.x += this.radius;
    }
    if (this.x + this.radius >= width) {
      this.x -= this.radius;
    }
    if (this.y - this.radius <= 0) {
      this.y += this.radius;
    }
    if (this.y + this.radius >= height) {
      this.y -= this.radius;
    }
  }

  setControls() {
    window.onkeydown = (e) => {
      if (e.key === 'a') {
        this.x -= this.velX;
      } else if (e.key === 'd') {
        this.x += this.velX;
      } else if (e.key === 'w') {
        this.y -= this.velY;
      } else if (e.key === 's') {
        this.y += this.velY;
      }
    };
  }

  detectCollision() {
    balls.forEach((b) => {
      if (!b.alive) {
        return;
      }
      const dx = this.x - b.x;
      const dy = this.y - b.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.radius + b.radius) {
        b.alive = false;
      }
    });
  }
}

const p = document.querySelector('p');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const balls = [];
while (balls.length < 5) {
  balls.push(Ball.create(width, height));
}
const evilCircle = EvilCircle.create(width, height);
evilCircle.setControls();

let isFirstLoop = true;
function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  let count = 0;
  balls.forEach((b) => {
    if (!b.alive) {
      return;
    }
    b.draw(ctx);
    count++;
    if (isFirstLoop) {
      p.textContent = `Ball count: ${count}`;
    }
    b.update();
    b.detectCollision();
  });
  if (isFirstLoop) {
    isFirstLoop = false;
  }
  p.textContent = `Ball count: ${count}`;

  evilCircle.draw(ctx);
  evilCircle.update();
  evilCircle.detectCollision();

  requestAnimationFrame(loop);
}
loop();
