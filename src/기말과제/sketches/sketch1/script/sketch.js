function setup() {
  setCanvasContainer('canvas', 2, 2, true);

  background('gainsboro');
}

function draw() {
  background('gainsboro');
  translate(width / 2, height / 2);
  for (let n = 0; n < 360; n += 2) {
    let x = random(50, 150);
    let xx = random(150, 350);
    push();
    rotate(radians(n));
    strokeCap(SQUARE);
    strokeWeight(4);
    stroke(40);
    line(x, 0, xx, 0);
    pop();
  }
}

function mousePressed() {
  translate(mouseX - width / 2, mouseY - height / 2);
}

// // for (let n = 0; n < 10; n++) {
// //   stroke(random(255), random(255), random(255));
// // }
