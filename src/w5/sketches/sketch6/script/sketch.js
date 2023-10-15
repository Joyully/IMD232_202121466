function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  background('gainsboro');

  //돌아가는 기준점, 축을 옮기는 과정

  push();
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  line(200, 0, 200, height);
  line(0, 100, width, 100);
  translate(width / 2, height / 2);
  fill(150);
  rect(0, 0, 50);
  rotate((TAU / 360) * 25); //360도 나누고 뒤에가 각도
  noStroke();
  fill('deeppink');
  rect(0, 0, 50);
  pop();

  //무효화
  //   rotate((TAU / 360) * -25);
  //   translate(-width / 2, -height / 2);

  translate(200, 100);
  rotate((TAU / 360) * -18);
  fill('blue');
  rect(0, 0, 50);
}
function draw() {}
