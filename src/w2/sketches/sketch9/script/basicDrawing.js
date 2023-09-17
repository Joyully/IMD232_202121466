function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  //루프로 계속 아래에 적어도 위에도 영향을 줌
  //다시 값을 위에도 적용을 시켜야함
  fill(255);
  rectMode(CORNER);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  rect(100, 100, 50, 50);
  ellipse(100, 100, 50);
  rect(200, 100, 50);
  ellipse(200, 100, 50, 25);

  rectMode(CENTER);
  ellipse(300, 100, 50, 25);
  rect(300, 100, 50);

  fill(255, 127, 0);
  circle(200, 200, 50);
  colorMode(HSL);
  fill(240, 100, 50);
  circle(180, 250, 50);
  noStroke();
  circle(100, 250, 50);

  rect(300, 50, 50, 50, 10);

  stroke(0);
  line(100, 400, 150, 450);

  stroke('teal');
  line(200, 400, 250, 450);
  stroke('fuchsia');
  strokeWeight(5);
  line(200, 400, 200, 450);

  stroke(50, 100, 10);
  strokeWeight(2);
  point(300, 400);
  point(310, 400);
  point(320, 400);
  point(330, 400);
  point(340, 400);
  point(350, 400);
  stroke(50, 100, 20);
  strokeWeight(3);
  point(300, 410);
  point(310, 410);
  point(320, 410);
  point(330, 410);
  point(340, 410);
  point(350, 410);
}
