let angle;
let isMouseClicked = false;

let texts = [
  'Yes',
  'No',
  'It is certain',
  'Most likely',
  'My reply is no',
  'Ask again later',
  'As i see it yes',
];
let selectedText = '';
let initialTextDisplayed = false;
let strokeColor;

function setup() {
  // 400x400 크기로 설정
  setCanvasContainer('canvas', windowWidth * 0.5, windowHeight * 0.5, true);
  background('gainsboro');

  strokeCap(SQUARE);
}

function draw() {
  // 캔버스 크기에 따라 중심 좌표 계산
  let centerX = isMouseClicked ? mouseX : width / 2;
  let centerY = isMouseClicked ? mouseY : height / 2;

  background('gainsboro');
  translate(centerX, centerY);

  for (let angle = 0; angle <= 360; angle += 1) {
    push();
    rotate(radians(angle));
    let x = random(300, 350);
    let xx = random(50, 80);

    stroke('blue');
    strokeWeight(4);
    line(x, 0, width, 0);

    stroke('blue');
    strokeWeight(2);
    line(0, 0, xx, 0);
    pop();
  }

  if (isMouseClicked) {
    strokeWeight(1);
    fill(20);
    textSize(15);
    textAlign(CENTER, CENTER);

    text(random(texts), 0, 0);
    selectedText = random(texts);
  } else {
    strokeWeight(35);
    fill(255);
    stroke(0, 0, 0, 95);
    textSize(25);
    if (!initialTextDisplayed) {
      textAlign(CENTER, CENTER);

      text(random(texts), 0, 0);
      initialTextDisplayed = true;
    } else {
      textAlign(CENTER, CENTER);

      text(selectedText, 0, 0);
    }
  }
}

function getRandomColor() {
  if (isMouseClicked) {
    color(random(255), random(255), random(255));
  }
}

function mousePressed() {
  isMouseClicked = true;
}

function mouseReleased() {
  isMouseClicked = false;
}

function windowResized() {
  // 창 크기 변경 시에도 캔버스 크기 유지
  resizeCanvas(windowWidth * 0.5, windowHeight * 0.5);
}

function keyPressed() {
  if (key == ' ') {
    redraw();
  }
}
