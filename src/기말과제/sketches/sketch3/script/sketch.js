let angles = [];
let isMouseClicked = false;
let currentColor;

function setup() {
  setCanvasContainer('canvas', 2, 2, true);
  background('gainsboro');
}

function draw() {
  background('gainsboro');

  if (isMouseClicked) {
    translate(mouseX, mouseY);
  } else {
    translate(width / 2, height / 2);
  }

  for (let i = 0; i < 10; i++) {
    stroke(getRandomColor());
    for (let n = 0; n < 360; n += 2) {
      let x = random(50, 150);
      let xx = random(150, 350);
      push();
      rotate(radians(n));
      strokeCap(SQUARE);
      strokeWeight(4);
      line(x, 0, xx, 0);
      pop();
    }
  }
}

function mousePressed() {
  isMouseClicked = true;
}

function mouseReleased() {
  isMouseClicked = false;
}

function getRandomColor() {
  if (isMouseClicked) {
    colorMode(HSL);
    return lerpColor(color(30), color(random(255), 50, 50), 1);
  } else {
    return color(20);
  }
}

// function getRandomColor() {
//   if (isMouseClicked) {
//     return lerpColor(
//       color(30),
//       color(
//         map(mouseX, 0, width, 0, 255),
//         map(mouseY, 0, height, 0, 255),
//         map(mouseX - mouseY, 0, width - height, 0, 255)
//       ),
//       1
//     );
//   } else {
//     return color(30);
//   }
// }
