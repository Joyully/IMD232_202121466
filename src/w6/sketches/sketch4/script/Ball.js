class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(14, 15));
    this.acc = createVector(0, 0);
    this.rad = 10;
    this.lifeSpan = 60;
    this.color = color(random(255), random(255), random(255));
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 1;
  }

  display() {
    stroke(0, this.lifeSpan);
    fill(this.color, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
