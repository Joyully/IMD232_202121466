let pos;
let vel;
let acc;
let mv;
let posToMv;
let velocity;
let accelertaion;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('gainsboro');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = createVector();
  acc.mult(0.1);
  mv = createVector();
  posToMv = createVector();
}

function draw() {
  background('gainsboro');
  update();
  display();
  // checkEdges();
  mv.set(mouseX, mouseY);
  acc.set(posToMv.x, posToMv.y);
  translate(pos.x, pos.y);
  posToMv = p5.Vector.sub(mv, pos);

  strokeWeight(1);
  stroke('black');
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(2);
  stroke('blue');
  line(0, 0, vel.x * 5, vel.y * 5);

  acc.normalize();
  acc.mult(0.1);

  stroke('deeppink');
  line(0, 0, acc.x * 50, acc.y * 50);
}

function update() {
  // acc = p5.Vector.random2D();

  vel.add(acc);
  vel.limit(5);
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
