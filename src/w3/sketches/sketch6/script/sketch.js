let p = {};
// let p = {
//   add: function (otherVector) {
//     this.x += otherVector.x;
//     this.y += otherVector.y;
//   },
// };
let v = {
  x: 3,
  y: 5,
};
let radius = 25;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  // pos = [width / 2, height / 2];
  p.x = width / 2;
  p.y = height / 2;

  console.log('pos', p);
  console.log('vel', v);
}

function draw() {
  background('whtie');
  fill(50);

  // pos[0] += vel[0];
  // pos[1] += vel[1];

  p.x += v.x;
  p.y += v.y;

  // p.add(v);

  // ellipse(pos[0], pos[1], 50);
  ellipse(p.x, p.y, 50);

  // if (pos[0] < 0 || pos[0] > width) {
  //   vel[0] *= -1;
  // }
  // if (pos[1] < 0 || pos[1] > height) {
  //   vel[1] *= -1;
  // }

  if (p.x - radius < 0 || p.x + radius > width) {
    v.x *= -1;
  }
  if (p.y - radius < 0 || p.y + radius > height) {
    v.y *= -1;
  }
}
