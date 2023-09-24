let cv;
//center
let mv;
//mouse
let cvTomv;
//cv to mv

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvTomv = createVector();
}

function draw() {
  background('white');

  mv.set(mouseX, mouseY);
  cvTomv = p5.Vector.sub(mv, cv);

  let mag = cvTomv.mag();
  console.log(mag);
  noStroke();
  fill('slateblue');
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('slateblue');
  translate(cv.x, cv.y);
  line(0, 0, cvTomv.x, cvTomv.y);
  //mv에서 cv를 뺌
}
