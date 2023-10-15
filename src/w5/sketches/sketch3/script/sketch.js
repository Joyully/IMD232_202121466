const stripeNum = 20;
const stripeNum2 = 15;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  background('gainsboro');
}

function draw() {
  background('gainsboro');
  noStroke();
  //   fill('blue');

  //몇개의 스트라이프 갯수가 정해짐
  //   for (let a = 0; a < 10; a++) {
  //     const rectwidth = width / (10 + 10 + 1);
  //     const rectX = (width / (10 + 10 + 1)) * (2 * a + 1);
  //     rect(rectX, 0, rectwidth, height);
  //     // rect(0, 0, 10, height);
  //   }

  //   for (let a = 0; a < stripeNum; a++) { //세로줄
  //     const rectwidth = width / (stripeNum + stripeNum + 1);
  //     const rectX = (width / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //     rect(rectX, 0, rectwidth, height);
  //     // rect(0, 0, 10, height);
  //   }

  //   noStroke();
  //   fill('deeppink');
  //   for (let a = 0; a < stripeNum; a++) { //가로줄
  //     const rectHeight = height / (stripeNum + stripeNum + 1);
  //     const rectY = (height / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //     rect(0, rectY, width, rectHeight);
  //     // rect(0, 0, 10, height);
  //   }

  //사이즈에 맞게 넣겠다
  //   for (let a = stripeBegin; a < width; a += 2 * stripeGap) {
  //     rect(a, 0, stripeGap, height);
  //   }

  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((255 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      let x = ((a + 1) * width) / (stripeNum + 1); //곱하기 뒤에 숫자 갯수에 맞게 넣고 싶으면 원하는 갯수 +1
      let y = ((b + 1) * height) / (stripeNum2 + 1);
      if (a % 2 == 0) {
        //짝수면 어쩌구 아니면 어쩌구
        ellipse(x, y, 10);
      } else {
        rect(x, y, 10);
      }
    }
  }
}
