function setup() {
  setCanvasContainer('p5SketchGoesHere', 400, 300, true);
  background('#ff02e3');
}

function draw() {
  background('#ff02e3');
  circle(mouseX, mouseY, width * 0.1);
}
