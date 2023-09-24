let pos;
let vel;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('lightgreen');
  pos = createVector(random(width), random(height));
  // vel = createVector(random(-5, 5), random(-5, 5));

  //속도가 일정했으면 좋겠다 하면
  //일정속도 방법 1
  // vel = createVector(1, 0);
  // vel = createVector(0, 1);
  // vel.rotate(random(TAU));
  // vel.mult(5);

  //일정속도 방법 2
  vel = p5.Vector.random2D();
  vel.mult(5);

  //설정한 값을 콘솔로 보자
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('mag', vel.mag());
}

function draw() {
  background('lightgreen');
  update();
  // pos.add(vel);

  display();
  // noStroke();
  // fill('white');
  // ellipse(pos.x, pos.y, 50);

  checkEdges();
  // if (pos.x < 0) {
  //   pos.x = width;
  // } else if (pos.x > width) {
  //   pos.x = 0;
  // }
  // if (pos.y < 0) {
  //   pos.y = height;
  // } else if (pos.y > height) {
  //   pos.y = 0;
  // }
}

//함수를 만들어줌
function update() {
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
