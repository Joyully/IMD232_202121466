let radius = 100;
let height = 40;
let angleX = 0;
let angleY = 0;
let rotationXSpeed = 0;
let rotationYSpeed = 0;
const damping = 0.95;
let isMouseActive = true;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(220);

  if (isMouseActive) {
    // 클릭으로 가속도 적용
    rotationXSpeed += radians((mouseY - pmouseY) * 0.05);
    rotationYSpeed += radians((mouseX - pmouseX) * 0.05);

    // 회전 속도에 댐핑 적용
    rotationXSpeed *= damping;
    rotationYSpeed *= damping;

    // 회전 속도에 따라 회전 각도 적용
    angleX += rotationXSpeed;
    angleY += rotationYSpeed;
  }

  rotateX(angleX);
  rotateY(angleY);

  // 상단 원 (색상으로 채우기)
  fill('#f7b733'); // Red color
  beginShape();
  for (let i = 0; i < 360; i += 10) {
    let x = cos(radians(i)) * radius;
    let y = sin(radians(i)) * radius;
    vertex(x, y, -height / 2);
  }
  endShape(CLOSE);

  // 하단 원 (색상으로 채우기)
  fill('#f7b733'); // Red color
  beginShape();
  for (let i = 0; i < 360; i += 10) {
    let x = cos(radians(i)) * radius;
    let y = sin(radians(i)) * radius;
    vertex(x, y, height / 2);
  }
  endShape(CLOSE);

  // 옆면 (색상으로 채우기)
  fill('#fc4a1a'); // Red color
  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i < 360; i += 10) {
    let x = cos(radians(i)) * radius;
    let y = sin(radians(i)) * radius;
    vertex(x, y, -height / 2);
    vertex(x, y, height / 2);
  }
  endShape(CLOSE);
}

function mouseClicked() {
  // 클릭하면 회전을 멈춤
  isMouseActive = !isMouseActive;
}
