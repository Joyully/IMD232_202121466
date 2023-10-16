let nGon = 3;
//숫자 다각형 꼭지점 숫자
let rad = 200;
let x;
let y;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('gainsboro');
}
function draw() {
  x = width / 2;
  y = height / 2;

  background('gainsboro');

  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, 2 * rad);
  noStroke();
  fill(0);

  for (let a = 0; a < nGon; a++) {
    const angle = (TAU / nGon) * a - (TAU / 360) * 90;
    const pointX = cos(angle) * rad + x;
    // const pointX = cos((TAU / nGon) * a) * rad + x;
    const pointY = sin(angle) * rad + y;
    ellipse(pointX, pointY, 10);
  }
  // stroke('deeppink');
  // noFill();
  // beginShape();
  // for (let a = 0; a < nGon; a++) {
  //   const angle = (TAU / nGon) * a - (TAU / 360) * 90;
  //   const pointX = cos(angle) * rad + x;
  //   const pointY = sin(angle) * rad + y;
  //   vertex(pointX, pointY);
  // }
  // endShape(CLOSE);
  // 공부하기
}
