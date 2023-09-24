// let pos;
// let vel;
// let acc;

class Ball {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.1);
  }
  update() {
    this.acc = p5.Vector.random2D();
    this.acc.mult(1);
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }

  display() {
    noStroke();
    fill('white');
    ellipse(this.pos.x, this.pos.y, 50);
  }
}

let aBall;
let bBall;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('lightgreen');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  //설정한 값을 콘솔로 보자
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('acc', acc);
  console.log('velmag', vel.mag());
  console.log('accmag', acc.mag());

  aBall = new Ball();
  bBall = new Ball();
}

function draw() {
  background('lightgreen');
  aBall.update();
  aBall.display();
  aBall.checkEdges();
  bBall.update();
  bBall.display();
  bBall.checkEdges();
  console.log('velMag', vel.mag());
  console.log('accMag', acc.mag());
}

//함수를 만들어줌
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
