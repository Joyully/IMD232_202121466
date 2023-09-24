let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  // vel = createVector(3, 5);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
}

function draw() {
  background('white');
  ellipse(pos.x, pos.y, 50);
  update();
  infiniteEdge();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(2);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

// if (pos.x - radius < 0 || pos.x + radius > width) {
//   vel.x *= -1;
// }
// if (pos.y - radius < 0 || pos.y + radius > height) {
//   vel.y *= -1;
// }

function infiniteEdge() {
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
