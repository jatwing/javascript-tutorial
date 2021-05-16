function Brick() {
  this.width = 10;
  this.height = 20;
}

function BlueGlassBrick() {
  Brick.call(this);
  this.opacity = 0.5;
  this.color = 'blue';
}

console.log(JSON.stringify(new BlueGlassBrick()));
