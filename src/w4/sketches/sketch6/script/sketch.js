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
  if (moverA.contackEdge()) {
    let c = 0.5;
    //0-1사이의 값이여야함
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverA.vel.copy();
    //-1 방향을 뒤집어야함
    friction.mult(-1);
    friction.mult(c);
    moverA.applyForce(friction);
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
  if (moverB.contackEdge()) {
    let c = 0.1;
    //0-1사이의 값이여야함
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverB.vel.copy();
    //-1 방향을 뒤집어야함
    friction.mult(-1);
    friction.mult(c);
    moverB.applyForce(friction);
  }
  moverB.update();
  if (moverB.contackEdge()) {
  }
  moverB.checkEdges();
  moverB.display();
  moverB.displayVector();
}
