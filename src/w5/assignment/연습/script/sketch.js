const cNum = 8;
const rNum = 8;
const ellipseBegin = 70;
const ellipseGap = 39;

let angle;
let angleVel;
let angleBegin = 0;
let angleBeginVel;
let angleStep = [39, 39];

function setup() {
  setCanvasContainer('myCanvas', 1, 1, true);

  angleBegin = createVector(0, TAU / -4);
  angleBeginVel = createVector(periodToAngleVel(120), periodToAngleVel(120));

  background('gainsboro');
}

function draw() {
  angleBegin.add(angleBeginVel);
  background('gainsboro');
  noFill();

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      stroke((255 / rNum) * r, (255 / cNum) * c, 255);
      let x = ellipseBegin + c * (3 * ellipseGap);
      let y = ellipseBegin + r * (3 * ellipseGap);

      ellipse(x, y, 2 * ellipseGap);

      ellipse(
        x + sin(angleBegin.x) * angleStep[0],
        y + sin(angleBegin.y) * angleStep[1],
        15
      );
      push();
      translate(x, y);
      rotate(angleBegin);
      line(0, 0, 39, 0);
      pop();
    }
  }
  // angleBegin += angleBeginVel;
}
function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
