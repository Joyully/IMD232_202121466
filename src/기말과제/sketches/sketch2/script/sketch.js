let angles = [];
let isMouseClicked = false;

function setup() {
  setCanvasContainer('canvas', 2, 2, true);
  background('gainsboro');
}

function draw() {
  background('gainsboro');
  translate(width / 2, height / 2);

  for (let i = 0; i < 10; i++) {
    stroke(30);
    for (let n = 0; n < 360; n += 2) {
      let x = random(50, 150);
      let xx = random(150, 350);
      push();
      rotate(radians(n));
      strokeCap(SQUARE);
      strokeWeight(4);
      line(x, 0, xx, 0);
      pop();
      if (isMouseClicked) {
        stroke(random(255), random(255), random(255));
      }
    }
  }
}

function mousePressed() {
  isMouseClicked = true;
}

function mouseReleased() {
  isMouseClicked = false;
}
