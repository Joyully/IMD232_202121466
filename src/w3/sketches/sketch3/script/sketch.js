function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('blue');
}

function draw() {
  background('blue');
  fill('orange');
  //   if (mouseX > width / 2) {
  //     rect(width / 2, 0, width / 2, height);
  //     // console.log('mouse is right side of the canvas');
  //   } else {
  //     rect(0, 0, width / 2, height);
  //     // console.log('mouse is left side of the canvas');
  //   }

  //   if (mouseX > width / 2) {
  //     if (mouseY > height / 2) {
  //       rect(width / 2, height / 2, width / 2, height / 2);
  //     } else {
  //       rect(width / 2, 0, width / 2, height / 2);
  //     }
  //   } else {
  //     if (mouseY > height / 2) {
  //       rect(0, height / 2, width / 2, height / 2);
  //     } else {
  //       rect(0, 0, width / 2, height / 2);
  //     }
  //   }

  if (mouseX > (2 / 3) * width) {
    if (mouseY > height / 2) {
      rect((2 / 3) * width, height / 2, width / 3, height / 2);
    } else {
      rect((2 / 3) * width, 0, width / 3, height / 2);
    }
  } else if (mouseX > (1 / 3) * width) {
    if (mouseY > height / 2) {
      rect((1 / 3) * width, height / 2, width / 3, height / 2);
    } else {
      rect((1 / 3) * width, 0, width / 3, height / 2);
    }
  } else {
    if (mouseY > height / 2) {
      rect(0, height / 2, width / 3, height / 2);
    } else {
      rect(0, 0, width / 3, height / 2);
    }
  }
}
