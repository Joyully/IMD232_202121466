let pos;
let vel;
let acc;
let rad = 25;

let aBall;
let bBall;
let cBall;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  reset();

  aBall = new Mover();
  bBall = new Mover();
  cBall = new Mover();
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
  aBall.update();
  aBall.infiniteEdge();
  aBall.display();
  bBall.update();
  bBall.infiniteEdge();
  bBall.display();
  cBall.update();
  cBall.infiniteEdge();
  cBall.display();
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
    // pos.x = width
  } else if (pos.x > width) {
    pos.x -= width;
    // pos.x = 0
  }
  if (pos.y < 0) {
    pos.y += height;
    // pos.y = height
  } else if (pos.y > height) {
    pos.y -= height;
    // pos.y = 0
  }
}

//움직이게 만들지
function update() {
  acc = p5.Vector.random2D();
  //mult 값을 올리면 격하게
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(30);
  pos.add(vel);
}

function display() {
  ellipse(pos.x, pos.y, 2 * rad);
}
