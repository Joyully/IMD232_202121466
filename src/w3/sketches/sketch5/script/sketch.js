let pos;
let vel = [3, 5];

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background('whtie');
  fill(50);

  pos[0] += vel[0];
  pos[1] += vel[1];

  ellipse(pos[0], pos[1], 50);

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
