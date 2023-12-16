let isLeftCanvasClicked = false;
let isRightCanvasClicked = false;
let isMouseClicked = false;
let texts = [
  'Yes',
  'No',
  'It is certain',
  'Most likely',
  'My reply is no',
  'Ask again later',
  'As I see it, yes',
];
let selectedText = '';
let initialTextDisplayed = false;

let leftCanvasX;
let leftCanvasY;

let rightCanvasX;
let rightCanvasY;

// 왼쪽 캔버스에 그려질 물체의 초기 위치
let leftObjectX;
let leftObjectY;

// 오른쪽 캔버스에 그려질 물체의 초기 위치
let rightObjectX;
let rightObjectY;

// 왼쪽 캔버스에 그려질 물체의 초기 위치 (원래 위치)
let originalLeftObjectX;
let originalLeftObjectY;

// 오른쪽 캔버스에 그려질 물체의 초기 위치 (원래 위치)
let originalRightObjectX;
let originalRightObjectY;

function setup() {
  setCanvasContainer('canvas', 800, 400, true);
  background('gainsboro');
  isLeftCanvasClicked = false;
  isRightCanvasClicked = false;
  isMouseClicked = false;

  // 왼쪽 캔버스의 초기 위치를 중앙으로 설정
  leftCanvasX = width / 4;
  leftCanvasY = height / 2;

  // 오른쪽 캔버스의 초기 위치를 중앙으로 설정
  rightCanvasX = (width / 4) * 3;
  rightCanvasY = height / 2;

  // 왼쪽 캔버스의 물체 초기 위치를 중앙으로 설정
  originalLeftObjectX = leftObjectX = 0;
  originalLeftObjectY = leftObjectY = 0;

  // 오른쪽 캔버스의 물체 초기 위치를 중앙으로 설정
  originalRightObjectX = rightObjectX = 0;
  originalRightObjectY = rightObjectY = 0;
}

function draw() {
  background('gainsboro');

  noStroke();
  // 왼쪽 캔버스
  fill(200);
  rect(0, 0, width / 2, height);

  // 오른쪽 캔버스
  fill(150);
  rect(width / 2, 0, width / 2, height);

  // 왼쪽 캔버스에 그려질 내용
  translate(leftCanvasX, leftCanvasY);

  // 왼쪽 캔버스의 물체만 이동
  translate(leftObjectX, leftObjectY);

  for (let i = 0; i < 10; i++) {
    stroke(getRandomColor());
    for (let n = 0; n < 360; n += 2) {
      let x = random((width * 0.1) / 1.8, width * 0.4) / 1.8;
      let xx = random((width * 0.4) / 3, (width * 0.7) / 3);
      push();
      rotate(radians(n));
      strokeCap(SQUARE);
      strokeWeight(4);
      line(x, 0, xx, 0);
      pop();
    }
  }

  if (isLeftCanvasClicked || isMouseClicked) {
    strokeWeight(1);
    fill(20);
    textSize(15);
    textAlign(CENTER, CENTER);

    text(random(texts), 0, 0);
    selectedText = random(texts);
  } else {
    strokeWeight(width * 0.03);
    fill('blue');
    stroke(255, 255, 255, 0.5);
    textSize(width * 0.02);
    if (!initialTextDisplayed) {
      textAlign(CENTER, CENTER);

      text(random(texts), 0, 0);
      initialTextDisplayed = true;
    } else {
      textAlign(CENTER, CENTER);

      text(selectedText, 0, 0);
    }
  }

  // 오른쪽 캔버스에 그려질 내용
  translate(rightCanvasX - leftCanvasX, rightCanvasY - leftCanvasY);

  // 오른쪽 캔버스의 물체만 이동
  translate(rightObjectX, rightObjectY);
  for (let angle = 0; angle <= 360; angle += 1) {
    push();
    rotate(radians(angle));
    let x = random(300, 350);
    let xx = random(50 / 0.3, 80 / 1.5);

    // stroke('blue');
    // strokeWeight(4);
    // line(x, 0, width, 0);

    stroke('blue');
    strokeWeight(2);
    line(0, rightCanvasY / 1.1, xx, 0);
    pop();
  }

  if (isRightCanvasClicked || isMouseClicked) {
    strokeWeight(1);
    fill(20);
    textSize(15);
    textAlign(CENTER, CENTER);

    text(random(texts), 0, 0);
    selectedText = random(texts);
  } else {
    strokeWeight(30);
    fill(255);
    stroke(0, 0, 0, 95);
    textSize(20);
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

function mousePressed() {
  // 왼쪽 캔버스 내에서만 클릭 체크
  if (mouseX < width / 2) {
    isLeftCanvasClicked = true;
    isRightCanvasClicked = false; // 오른쪽 캔버스 클릭 해제
  }
  // 오른쪽 캔버스 내에서만 클릭 체크
  else if (mouseX >= width / 2) {
    isRightCanvasClicked = true;
    isLeftCanvasClicked = false; // 왼쪽 캔버스 클릭 해제
  }
}

function mouseReleased() {
  isLeftCanvasClicked = false;
  isRightCanvasClicked = false;

  // 클릭이 해제되면 왼쪽 물체를 원래 위치로 되돌리기
  leftObjectX = originalLeftObjectX;
  leftObjectY = originalLeftObjectY;

  // 클릭이 해제되면 오른쪽 물체를 원래 위치로 되돌리기
  rightObjectX = originalRightObjectX;
  rightObjectY = originalRightObjectY;
}

function mouseDragged() {
  // 왼쪽 캔버스에서만 마우스 위치 따라가기
  if (isLeftCanvasClicked) {
    leftObjectX = mouseX - leftCanvasX;
    leftObjectY = mouseY - leftCanvasY;

    // 오른쪽 캔버스의 물체는 정지
    rightObjectX = originalRightObjectX;
    rightObjectY = originalRightObjectY;
  }

  // 오른쪽 캔버스에서만 마우스 위치 따라가기
  else if (isRightCanvasClicked) {
    rightObjectX = mouseX - rightCanvasX;
    rightObjectY = mouseY - rightCanvasY;

    // 왼쪽 캔버스의 물체는 정지
    leftObjectX = originalLeftObjectX;
    leftObjectY = originalLeftObjectY;
  }
}

function windowResized() {
  resizeCanvas(800, 400);
}

function getRandomColor() {
  if (isLeftCanvasClicked || isMouseClicked) {
    colorMode(HSL);
    return lerpColor(color(30), color(random(255), 50, 50), 1);
  } else {
    return color(10);
  }
}
