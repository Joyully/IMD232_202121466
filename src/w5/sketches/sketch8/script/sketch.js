let mover;
let mVec;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  mover = new Mover(width / 2, height / 2, 10, 25, 'blue');
  //mass가 크며 ㄴ느리게 움직임
  mVec = new createVector(0, 0);

  background('gainsboro');
}
function draw() {
  mVec.set(mouseX, mouseY);
  const force = p5.Vector.sub(mVec, mover.pos);
  force.setMag(0.5);
  //force 값 조정

  mover.applyForce(force);
  mover.update();

  background('gainsboro');

  mover.display();
  mover.displayVectors();
}
