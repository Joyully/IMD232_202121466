class MagicEightBall {
  constructor() {
    this.angles = [];
    this.isMouseClicked = false;
    this.texts = [
      'Yes',
      'No',
      'It is certain',
      'Most likely',
      'My reply is no',
      'Ask again later',
      'As I see it, yes',
    ];
    this.selectedText = '';
    this.initialTextDisplayed = false;
  }

  setup() {
    setCanvasContainer('canvas', 200, 200, true);
    background('gainsboro');
  }

  draw() {
    background('gainsboro');

    if (this.isMouseClicked) {
      translate(mouseX, mouseY);
    } else {
      translate(width / 2, height / 2);
    }

    for (let i = 0; i < 10; i++) {
      stroke(this.getRandomColor());
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

    if (this.isMouseClicked) {
      strokeWeight(1);
      fill(20);
      textSize(15);
      textAlign(CENTER, CENTER);

      text(random(this.texts), 0, 0);
      this.selectedText = random(this.texts);
    } else {
      strokeWeight(30);
      fill('blue');
      stroke(255, 255, 255, 0.5);
      textSize(20);
      if (!this.initialTextDisplayed) {
        textAlign(CENTER, CENTER);

        text(random(this.texts), 0, 0);
        this.initialTextDisplayed = true;
      } else {
        textAlign(CENTER, CENTER);

        text(this.selectedText, 0, 0);
      }
    }
  }

  mousePressed() {
    this.isMouseClicked = true;
  }

  mouseReleased() {
    this.isMouseClicked = false;
  }

  getRandomColor() {
    if (this.isMouseClicked) {
      colorMode(HSL);
      return lerpColor(color(30), color(random(255), 50, 50), 1);
    } else {
      return color(10);
    }
  }
}
