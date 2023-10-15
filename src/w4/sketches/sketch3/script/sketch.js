let moverNM;
let gravity;
let wind;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('gainsboro');
  moverNM = new Mover(width / 2, height / 2, 25);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background('gainsboro');

  moverNM.addAcc(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverNM.addAcc(wind);
  }
  moverNM.update();
  moverNM.checkEdges();
  moverNM.display();
  moverNM.displayVector();
}
