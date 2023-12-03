class Flower {
  constructor(x, y, petalSize, angle) {
    this.x = x;
    this.y = y;
    this.petalSize = petalSize;
    this.angle = angle;
    this.color = color(random(360), 80, 50, 50);
    this.dragging = false;
    this.picked = false; // 따졌는지 여부
  }

  display() {
    push();
    rotate(this.angle);
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.petalSize, this.petalSize * 2);
    pop();
  }

  checkDrag() {
    let d = dist(mouseX - width / 2, mouseY - height / 2, this.x, this.y);
    if (d < this.petalSize / 2) {
      this.dragging = true;
      this.picked = true;
    }
  }

  drag() {
    if (this.dragging) {
      this.x = mouseX - width / 2;
      this.y = mouseY - height / 2;
    }
  }

  release() {
    this.dragging = false;
  }
}
