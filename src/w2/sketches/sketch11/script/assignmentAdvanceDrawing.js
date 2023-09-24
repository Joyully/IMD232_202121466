function setup() {
  setCanvasContainer('p5-canvas', 2, 2, true);
  background('white');
}

function draw() {
  background('#927A78');

  rectMode(CORNER);
  strokeWeight(6);
  stroke(180);
  line(30, 0, 30, 1000);
  line(100, 0, 100, 1000);
  line(170, 0, 170, 1000);
  line(240, 0, 240, 1000);
  line(310, 0, 310, 1000);
  line(380, 0, 380, 1000);
  line(450, 0, 450, 1000);
  line(520, 0, 520, 1000);
  line(590, 0, 590, 1000);
  line(660, 0, 660, 1000);
  line(730, 0, 730, 1000);
  line(800, 0, 800, 1000);
  line(870, 0, 870, 1000);
  line(950, 0, 950, 1000);

  strokeWeight(0);
  fill('#544843');
  rect(0, 550, 1000, 1000);
  rect(0, 510, 1000, 20);
  rect(0, 490, 1000, 10);

  strokeWeight(6);
  stroke(60);
  line(30, 493, 30, 1000);
  line(100, 493, 100, 1000);
  line(170, 493, 170, 1000);
  line(240, 493, 240, 1000);
  line(310, 493, 310, 1000);
  line(380, 493, 380, 1000);
  line(450, 493, 450, 1000);
  line(520, 493, 520, 1000);
  line(590, 493, 590, 1000);
  line(660, 493, 660, 1000);
  line(730, 493, 730, 1000);
  line(800, 493, 800, 1000);
  line(870, 493, 870, 1000);
  line(950, 493, 950, 1000);

  strokeWeight(3);
  stroke(0);

  //책상
  fill('#A47A68');
  rect(50, 650, 850, 50, 4);
  rect(75, 700, 805, 300);
  fill('#8C6354');
  noStroke();
  rect(77, 702, 801, 20);
  stroke('#61413F');
  rect(120, 750, 550, 300, 8);
  fill('#61413F');
  rect(77, 702, 801, 5);
  rect(710, 820, 130, 10, 0, 0, 4);
  rect(710, 920, 130, 10, 0, 0, 4);
  rect(120, 750, 550, 150, 8, 8, 0);
  rect(120, 915, 550, 5);
  rect(120, 935, 550, 2);
  fill('#A47A68');
  stroke(0);
  rect(710, 750, 130, 70, 4);
  rect(710, 850, 130, 70, 4);
  fill('#FCDA94');
  rect(750, 790, 50, 10, 2);
  rect(750, 890, 50, 10, 2);

  stroke(0);

  //창문
  fill(40);
  rect(210, 50, 490, 230, 4);
  fill('#FF9477');
  noStroke(0);
  rect(230, 70, 450, 190, 2);
  fill('#DB8291');
  rect(230, 70, 450, 80, 2);
  rect(230, 160, 450, 20, 2);
  rect(230, 190, 450, 10, 2);
  fill('#FCDA94');
  rect(250, 100, 180, 20, 8);
  rect(300, 120, 200, 20, 8);
  rect(600, 120, 50, 20, 8);
  stroke(0);
  fill(40);
  rect(450, 70, 20, 190);
  rect(470, 150, 10, 40, 0, 4, 4, 0);

  //컴퓨터
  fill('#FDF5E6');
  rect(370, 630, 210, 20, 2, 2, 0, 0);
  rect(400, 615, 150, 15);
  fill('#C38C94');
  rect(400, 615, 150, 8);
  rect(310, 605, 325, 10);
  fill('#FDF5E6');
  rect(290, 305, 370, 300, 6);
  fill('#E5D7BA');
  rect(340, 350, 270, 210, 4);
  fill('#95DAAF');
  rect(350, 360, 250, 190, 2);

  noStroke();
  fill('white');
  rect(292, 310, 8, 290, 6);
  rect(292, 308, 365, 8, 6);

  fill('#FDF5E6');
  rect(352, 380, 246, 5, 2);
  rect(352, 440, 246, 5, 2);
  rect(352, 460, 246, 5, 2);
  stroke(0);
  rect(380, 575, 195, 30, 8, 8, 0, 0);
  fill('white');
  rect(340, 575, 20);
  fill('#E5D7BA');
  rect(390, 585, 20, 10);
  rect(420, 585, 20, 10);
  rect(450, 585, 20, 10);
  strokeWeight(4);
  line(590, 580, 590, 595);
  line(600, 580, 600, 595);
  line(610, 580, 610, 595);

  strokeWeight(3);

  //본체
  fill('#FDF5E6');
  rect(600, 630, 50, 20, 20, 20, 0, 0);
  rect(620, 625, 10, 5, 8, 8, 0, 0);
  rect(680, 370, 160, 280, 6, 6, 0, 0);
  fill('white');
  strokeWeight(0);
  rect(683, 375, 5, 270, 6, 6, 0, 0);
  rect(683, 372, 155, 5, 6, 6, 0, 0);
  fill('#C38C94');
  rect(833, 374, 5, 275, 6, 6, 0, 0);
  rect(683, 643, 155, 5, 6, 6, 0, 0);
  rect(698, 445, 123, 6, 0, 0, 3);
  rect(698, 515, 123, 6, 0, 0, 3);
  strokeWeight(3);
  fill('#FDF5E6');
  rect(700, 390, 120, 55, 3);
  rect(700, 460, 120, 55, 3);
  rect(700, 530, 30, 45, 2);
  fill('white');
  rect(710, 400, 100, 25);
  rect(710, 470, 100, 25);
  //   rect(580, 640, 20, 05);
  strokeWeight(4);
  point(805, 435);
  point(795, 435);
  point(805, 505);
  stroke('#BB4642');
  point(795, 505);

  //   rect(100, 430, 20, 220);
  //   rect(120, 440, 10, 200);
  //   rect(130, 430, 20, 220);
  //   rect(150, 440, 10, 200);
  //   rect(160, 430, 20, 220);

  fill('#FDF5E6');
  stroke(0);
  strokeWeight(3);
  //게임기
  rect(100, 620, 130, 30, 2);
  fill('#C38C94');
  rect(105, 615, 120, 5);
  fill('#FDF5E6');
  rect(135, 580, 65, 35, 2, 2, 0, 0);
  fill('#C38C94');
  rect(140, 580, 55, 35);
  fill(80);
  rect(110, 630, 40, 10, 2);
  fill(50);
  rect(230, 640, 140, 5);

  //   noStroke();
  //   circle(220, 630, 40);
  //   circle(290, 630, 40);
  //   rect(220, 610, 70, 30);

  //스위치
  strokeWeight(0);
  fill(3);
  rect(78, 468, 54, 8, 0, 0, 4);
  strokeWeight(3);
  fill('#FDF5E6');
  rect(80, 400, 50, 70, 2);
  strokeWeight(0);
  fill('#C38C94');
  rect(90, 430, 30, 5);
  rect(90, 455, 30, 5);
  strokeWeight(3);
  fill('#FDF5E6');
  rect(90, 415, 30, 15);
  rect(90, 440, 30, 15);

  //고양이
  stroke(20);
  fill(20);
  beginShape();
  vertex(200, 1000);
  vertex(200, 850);
  vertex(240, 880);
  vertex(270, 880);
  vertex(310, 850);
  vertex(310, 1000);
  endShape(close);
  rect(350, 900, 20, 100);
  rect(350, 890, 60, 20, 8, 0);
  rect(390, 830, 20, 60, 8, 8, 0, 0);
  rectMode(CENTER);
  fill(200);
  circle(230, 910, 25);
  circle(280, 910, 25);
  fill(35);
  circle(235, 910, 12);
  circle(285, 910, 12);

  //이미지 참조
  //https://www.behance.net/gallery/34259355/Pixel-Room-90s?locale=ko_KR&
}
