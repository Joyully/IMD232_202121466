let angle = 0;
// let angleVel = (TAU / 360) * 1;
let angleVel;
let angleAcc;

function setup() {
  setCanvasContainer('myCanvas', 2, 1, true);

  //   angleVel = (TAU / 360) * 1;
  angleVel = 0;
  angleAcc = (TAU / 360) * 0.05;

  background('gainsboro');
}
function draw() {
  angleVel += angleAcc;
  angleVel = constrain(angleVel, -5, 5);
  //최소 최대 값
  angle += angleVel;
  background('gainsboro');

  translate(width / 2, height / 2);
  rotate(angle);
  //   line(0, 0, 100, 0);
  //   line(0, 0, -100, 0);
  line(-100, 0, 100, 0);
  ellipse(0, 0, 20);
}
