let magicEightBall;

function setup() {
  magicEightBall = new MagicEightBall();
  magicEightBall.setup();
}

function draw() {
  magicEightBall.draw();
}

function mousePressed() {
  magicEightBall.mousePressed();
}

function mouseReleased() {
  magicEightBall.mouseReleased();
}
