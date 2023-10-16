const cNum = 8;
const rNum = 8;
const ellipseBegin = 70;
const ellipseGap = 39;

let angleBegin = 0;
let angleStep = 1;
let angleBeginVel;
let angleIncrement = 15;

function setup() {
  setCanvasContainer('myCanvas', 1, 1, true);
  angleBeginVel = (TAU / 360) * angleStep;
  background('gainsboro');
}

function draw() {
  background('white');
  noFill();

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      if (r % 2 === 1) {
        if (c % 2 === 1) {
          stroke('slateblue');
        } else {
          stroke('springgreen');
        }
      } else {
        if (c % 2 === 1) {
          stroke('sandybrown');
        } else {
          stroke(255, 0, 0);
        }
      }

      let x = ellipseBegin + c * (3 * ellipseGap);
      let y = ellipseBegin + r * (3 * ellipseGap);
      fill('white');
      ellipse(x, y, 2 * ellipseGap);

      push();
      translate(x, y);

      let currentAngle =
        angleBegin + (TAU / 360) * ((c + r * cNum) * angleIncrement);
      rotate(currentAngle);

      line(0, 0, 39, 0);
      pop();

      fill(80);
      noStroke();
      let circleX = x + 39 * cos(currentAngle);
      let circleY = y + 39 * sin(currentAngle);
      ellipse(circleX, circleY, 15);

      noFill();
    }
  }
  angleBegin += (TAU / 360) * angleStep;
}
