let lines = [];

function setup() {
  setCanvasContainer('canvas', 2, 2, true);
  background('gainsboro');

  for (let n = 0; n < 360; n += 2) {
    let x = random(50, 150);
    let xx = random(150, 350);
    lines.push({ x, xx, angle: radians(n) });
  }
}

function draw() {
  background('gainsboro');
  translate(width / 2, height / 2);

  for (let i = 0; i < lines.length; i++) {
    let lineObj = lines[i];
    push();
    rotate(lineObj.angle);
    strokeCap(SQUARE);
    strokeWeight(4);
    stroke(40);
    line(lineObj.x, 0, lineObj.xx, 0);
    pop();
  }
}

function mouseMoved() {
  for (let i = 0; i < lines.length; i++) {
    let lineObj = lines[i];
    lineObj.x = map(sin(lineObj.angle + frameCount), -1, 1, 50, 150);
    lineObj.xx = map(sin(lineObj.angle + frameCount), -1, 1, 150, 350);
  }
}

function mousePressed() {
  for (let i = 0; i < lines.length; i++) {
    let lineObj = lines[i];
    lineObj.isDragging =
      dist(mouseX - width / 2, mouseY - height / 2, lineObj.x, 0) < 10 ||
      dist(mouseX - width / 2, mouseY - height / 2, lineObj.xx, 0) < 10;
  }
}

function mouseDragged() {
  for (let i = 0; i < lines.length; i++) {
    let lineObj = lines[i];
    if (lineObj.isDragging) {
      lineObj.x = mouseX - width / 2;
      lineObj.xx = mouseX - width / 2 + 200;
      lineObj.angle = atan2(mouseY - height / 2, mouseX - width / 2);
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].isDragging = false;
  }
}
