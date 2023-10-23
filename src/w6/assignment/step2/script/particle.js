class Particle {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(4, 0);
    this.vel.rotate((TAU / 360) * random(-360, 0));
    this.acc = createVector(0, 0);
    this.rad = 5;
    this.lifeSpan = 60;
    this.mass = mass;
    this.c;
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
    let opacity = map(this.lifeSpan, 60, 0, 100, 0);
    push();
    colorMode(HSB, 360, 100, 100, 100);
    this.c = color(random(360), 100, 100, opacity);
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
    pop();
    colorMode(RGB);
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
