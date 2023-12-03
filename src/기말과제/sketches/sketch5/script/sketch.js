let flowers = [];

function setup() {
  setCanvasContainer('myCanvas', 400, 400, true);
  background('gainsboro');
  noStroke();

  translate(width / 2, height / 2);

  // 꽃 모양 그리기
  drawFlower();

  // circle 그리기
  circle(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  fill(random(360), 50, 50, 90);
  circle(0, 0, 60);
}

function drawFlower() {
  ellipseMode(CENTER);

  let numPetals = int(random(6, 20)); // 6에서 20개의 꽃잎 개수 랜덤 설정

  for (let i = 0; i < numPetals; i++) {
    let angle = map(i, 0, numPetals, 0, TWO_PI);
    let petalSize = 80;

    // 각각의 꽃잎을 Flower 클래스로 생성하여 배열에 추가
    flowers.push(new Flower(0, 80, petalSize, angle));
  }
}

function draw() {
  background('gainsboro');
  translate(width / 2, height / 2);

  // 각 꽃잎을 배열에서 가져와 그리기
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }
}

function mousePressed() {
  // 각 꽃잎을 클릭했는지 확인
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].checkDrag();
  }
}

function mouseDragged() {
  // 클릭한 꽃잎을 드래그
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].drag();
  }
}

function mouseReleased() {
  // 드래그 중인 꽃잎을 놓음
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].release();
  }
}
