let moverA;
let gravity;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('myCanvas', 1, 1, true);
  background('gainsboro');
  moverA = new MoverWithMass(width / 2, height / 2, 100);
  gravity = createVector(0, 0.5);

  mVec = createVector();
  pMVec = createVector();
  throwingForce = createVector();
}

function draw() {
  background('gainsboro');

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  // if (mouseIsPressed && isMouseInsideCanvas()) {
  //   moverA.applyForce(wind);
  // }
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

  if (moverA.isHover) {
    const dragForce = p5.Vector.sub(mVec, pMVec).mult(0.1);
    moverA.applyForce(dragForce);
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVector();
}

function mouseMoved() {
  moverA.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  moverA.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  mVec.set(mouseX, mouseY);
  moverA.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  throwingForce = p5.Vector.sub(mVec, pMVec);
  moverA.applyForce(throwingForce.mult(0.1));
  moverA.mouseReleased();
}
