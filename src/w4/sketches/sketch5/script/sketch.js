let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('gainsboro');
  moverA = new MoverWithMass(width / 3, height / 2, 10);
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background('gainsboro');

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVector();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVector();
}
