const cNum = 8;
const rNum = 8;
const ellipseBegin = 70;
const ellipseGap = 39;

let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('myCanvas', 1, 1, true);

  angleBeginVel = (TAU / 360) * 1;
  background('gainsboro');
}

function draw() {
  background('gainsboro');
  noFill();

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      stroke((255 / rNum) * r, (255 / cNum) * c, 255);
      let x = ellipseBegin + c * (3 * ellipseGap);
      let y = ellipseBegin + r * (3 * ellipseGap);

      ellipse(x, y, 2 * ellipseGap);

      push();
      translate(x, y);
      rotate(angleBegin);
      line(0, 0, 39, 0);
      pop();

      // Draw rotating circle at the end of each line
      let circleX = x + 39 * cos(angleBegin);
      let circleY = y + 39 * sin(angleBegin);
      ellipse(circleX, circleY, 10);
    }
  }
  angleBegin += angleBeginVel;
}
