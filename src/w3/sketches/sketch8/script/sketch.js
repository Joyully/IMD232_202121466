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

  strokeWeight(2);
  stroke('black');
  line(0, 0, cv.x, cv.y);

  // mv.x = mouseX;
  // mv.y = mouseY;
  mv.set(mouseX, mouseY);
  stroke('slateblue');
  line(0, 0, mv.x, mv.y);
  // line(cv.x, cv.y, mv.x, mv.y);

  cvTomv = p5.Vector.sub(mv, cv);
  stroke('orange');
  translate(cv.x, cv.y);
  line(0, 0, cvTomv.x, cvTomv.y);
  //mv에서 cv를 뺌

  cvTomv.mult(0.5);
  strokeWeight(4);
  stroke('crimson');
  line(0, 0, cvTomv.x, cvTomv.y);
}
