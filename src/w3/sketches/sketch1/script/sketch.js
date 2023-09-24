let posX;
let posY;
let posXAdd = 3;
let posYAdd = 2;
let radius = 25;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background('white');
  ellipse(posX, posY, 50);
  posX += posXAdd;
  posY += posYAdd;

  if (posX - radius < 0 || posX + radius > width) {
    posXAdd *= -1;
  }
  if (posY - radius < 0 || posY + radius > height) {
    posYAdd *= -1;
  }

  // 더하는 함수
  //   posX++;
  //   posX = posX + 1;
}
