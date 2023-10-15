class Mover {
  constructor(x, y, mass, rad, color) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
    this.color = color;
  }

  applyForce(force) {
    const forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    noStroke();
    fill(this.color);

    // rectMode(CENTER);
    // rect(this.pos.x, this.pos.y, 2 * this.rad);
    // ellipse(this.pos.x, this.pos.y, 2 * this.rad);

    beginShape();
    vertex(this.pos.x + this.rad, this.pos.y);
    vertex(this.pos.x - this.rad / 2, this.pos.y - this.rad / 2);
    vertex(this.pos.x, this.pos.y);
    vertex(this.pos.x - this.rad / 2, this.pos.y + this.rad / 2);
    endShape(CLOSE);
  }

  displayVectors() {
    stroke('deeppink');
    strokeWeight(1);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
  }
}
