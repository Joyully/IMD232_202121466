let anArray = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90];

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  background('gainsboro');

  // line(10, 10, 10, height - 10);
  // line(20, 10, 20, height - 10);
  // line(30, 10, 30, height - 10);
  // line(40, 10, 40, height - 10);
  // line(50, 10, 50, height - 10);
  // line(60, 10, 60, height - 10);
  // line(70, 10, 70, height - 10);
  // line(80, 10, 80, height - 10);

  for (let i = 0; i < width; i += 10) {
    line(i + 10, 10, i + 10, height - 10);

    //i 값은 늘어날 값
    // circle(10, i, 10); //y값으로 원이 늘어남
    // circle(i, 10, 10); //x값으로 원이 늘어남

    //마지막값에 설정한 값이 늘어나는 거임
  }

  for (let a = 0; a < anArray.length; a++) {
    console.log('anArray[${a}]', anArray[a]); //
  }

  //두번째 반복횟수
  //a++ +1만 늘어나기 때문에 circle에서 a값에 20을 곱해 원이 겹치지 않게 함
  for (let a = 0; a < 10; a++) {
    circle(a * 20, height / 2, 20);
  }
}

function draw() {}
