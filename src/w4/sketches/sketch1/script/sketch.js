let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  // background('white');
  ball = new Mover(width / 2, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0);
  //왼쪽으로 부는?
}

function draw() {
  let gr = p5.Vector.mult(gravity, ball.mass);
  ball.applyForce(gr);
  let gr2 = p5.Vector.mult(gravity, ball2.mass);
  ball2.applyForce(gr2);
  ball.applyForce(gravity);
  ball2.applyForce(gravity);
  if (mouseIsPressed) {
    ball.applyforce(wind);
    ball2.applyforce(wind);
  }
  ball.update();
  ball.edgeBounce();
  ball2.update();
  ball2.edgeBounce();
  background('white');
  fill('slateblue');
  ball.display();
  ball2.display();
}
