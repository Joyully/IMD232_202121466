function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  background('gainsboro');

  noStroke();
  fill('deeppink');
  rect(0, 0, 200, 100);

  fill('blue');
  rect(width / 2, height / 2, 300, 200);

  rotate((TAU / 360) * 45);

  fill('cornflowerblue');
  rect(0, 0, 300, 200);

  fill('lime');
  rect(width / 2, height / 2, 300, 200);
}
function draw() {}
