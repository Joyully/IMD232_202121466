function setup() {
  setCanvasContainer('myCanvas', 400, 400, true);
  background('gainsboro');

  translate(width / 2, height / 2);

  // 꽃 모양 그리기
  drawFlower();

  // circle 그리기
  circle(CENTER);
  colorMode(HSL, 360, 100, 100, 100);
  fill(random(360), 50, 50, 90);
  noStroke();
  circle(0, 0, 60);
}

function drawFlower() {
  ellipseMode(CENTER);

  let numPetals = int(random(6, 20)); // 10에서 20개의 꽃잎 개수 랜덤 설정

  for (let i = 0; i < numPetals; i++) {
    // 랜덤한 각도 설정
    let angle = map(i, 0, numPetals, 0, TWO_PI);

    // 크기를 더 크게 조절한 꽃잎 그리기
    push();
    rotate(angle);

    let petalSize = 80; // 크게 조절
    colorMode(HSL, 360, 100, 100, 100);
    fill(random(360), 80, 50, 50);
    noStroke();
    ellipse(0, 80, petalSize, petalSize * 2);

    pop();
  }
}
