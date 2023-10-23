class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  setPosition(x, y) {
    this.pos.set(x, y);
  }

  emitParticles(count) {
    for (let i = 0; i < count; i++) {
      const offsetX = random(-10, 10);
      const offsetY = random(-10, 10);
      this.particles.push(
        new Particle(this.pos.x + offsetX, this.pos.y + offsetY)
      );
    }
  }

  update(gravity) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let particle of this.particles) {
      particle.display();
    }
  }
}
