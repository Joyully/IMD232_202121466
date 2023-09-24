let cv;
//center
let mv;
//mouse

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}

function draw() {
  background('white');
  stroke('blue');
  line(0, 0, cv.x, cv.y);

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('orange');
  line(0, 0, mv.x, mv.y);

  mv.sub(cv);
  //원점을 옮겨줌
  translate(cv.x, cv.y);
  stroke('black');
  line(0, 0, mv.x, mv.y);

  // line(cv.x, cv.y, mouseX, mouseY);
}
