class Particle {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(5, 0);
    this.vel.rotate((TAU / 360) * random(-360, 0));
    this.acc = createVector(0, 0);
    this.rad = 5;
    this.lifeSpan = 60;
    this.mass = mass;
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
    noStroke();
    fill(0, this.lifeSpan);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
