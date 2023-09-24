let center;
let mouse;
let centerToMouse;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('lightcoral');
  center = createVector(width / 2, height / 2);
  mouse = createVector();
  centerToMouse = createVector();
}

function draw() {
  background('lightcoral');
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  //마우스에서 센터를 빼줌

  strokeWeight(2);
  stroke('white');
  translate(center.x, center.y);
  line(0, 0, centerToMouse.x, centerToMouse.y);

  centerToMouse.normalize();
  centerToMouse.mult(50);
  strokeWeight(4);
  stroke('black');
  line(0, 0, centerToMouse.x, centerToMouse.y);

  //진짜로 만나는지 확인
  console.log(centerToMouse.mag());
}
