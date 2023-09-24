let pos;
let vel;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('lightgreen');
  pos = createVector(random(width), random(height));
  vel = createVector(random(-5, 5), random(-5, 5));

  //속도 값 콘솔로 보자
  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background('lightgreen');
  pos.add(vel);
  noStroke();
  fill('white');
  ellipse(pos.x, pos.y, 50);

  if (pos.x < 0) {
    pos.x = width;
    //pos.x += width;
  } else if (pos.x > width) {
    pos.x = 0;
    //pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
