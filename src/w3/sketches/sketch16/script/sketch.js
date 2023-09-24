let pos;
let vel;
let acc;
let mv;
let velocity;
let accelertaion;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('gainsboro');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  mv = createVector();
  posToMv = createVector();
  velocity = createVector();
  accelertaion = createVector();
}

function draw() {
  background('gainsboro');
  update();
  display();
  checkEdges();
  mv.set(mouseX, mouseY);

  posToMv = p5.Vector.sub(mv, pos);
  strokeWeight(1);
  stroke('black');
  translate(pos.x, pos.y);
  line(0, 0, posToMv.x, posToMv.y);

  velocity = vel;
  strokeWeight(2);
  stroke('blue');
  line(0, 0, velocity.x * 10, velocity.y * 10);
  // line(0, 0, vel.x * 10, vel.y * 10);

  accelertaion = p5.Vector.mult(acc, vel);
  stroke('deeppink');
  // line(0, 0, acc.x * 100, acc.y * 100);
  line(0, 0, accelertaion.x * 100, accelertaion.y * 100);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill('white');
  ellipse(pos.x, pos.y, 50);
}
