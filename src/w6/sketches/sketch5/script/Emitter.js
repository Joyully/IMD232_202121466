class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y); //위치 지정
  }

  addParticle() {
    this.particles.push(
      new Particle(this.pos.x, this.pos.y, random(1, 16), random(180, 300))
    );
  }

  applyGravity(gravity) {
    for (let eachParticle of this.particles) {
      const force = p5.Vector.mult(gravity, eachParticle.mass);
      eachParticle.applyForce(force);
    }
  }

  applyRepeller(repeller) {
    this.particles.forEach((eachParticle) => {
      const force = repeller.repel(eachParticle);
      eachParticle.applyForce(force);
    });
  }

  update(gravity) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // eachParticle[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }

    // for (let eachParticle in this.particle) {
    //   eachParticle.update();
    //   if (eachParticle.isDead()) {
    //     this.particles.splice(i, 1); i를 구분이 안되니까 다른 방법은 밑으로..
    // }
  }

  display() {
    //   for (let i = eachParticle.length - 1; i >= 0; i--) {
    //     eachParticle[i].display(gravity);
    //   }
    // }

    //차근차근 세는 방법..?
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}
