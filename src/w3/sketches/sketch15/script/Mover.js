class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector();
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
      // pos.x = width
    } else if (this.pos.x > width) {
      this.pos.x -= width;
      // pos.x = 0
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
      // pos.y = height
    } else if (this.pos.y > height) {
      this.pos.y -= height;
      // pos.y = 0
    }
  }

  //움직이게 만들지
  update() {
    this.acc = p5.Vector.random2D();
    //mult 값을 올리면 격하게
    this.acc.mult(0.5);
    this.vel.add(this.acc);
    this.vel.limit(30);
    this.pos.add(this.vel);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * rad);
  }
}
