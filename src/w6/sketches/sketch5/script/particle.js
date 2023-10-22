class Particle {
  constructor(x, y, mass, lifeSpan) {
    this.pos = createVector(x, y);
    // this.vel = p5.Vector.random2D(); 랜덤한 방향으로 1짜리 백터밖에 안감
    this.vel = createVector(1, 0); //특정한 정해진 0도의 방향으로 길이 1짜리
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** 0.5 * 5;
    this.lifeSpan = lifeSpan;
    this.life = this.lifeSpan;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass); //질량
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //acc 값 초기화
    this.life--; //매번 1씩 빼줌
  }

  display() {
    const normalizedLife = constrain(this.life / this.lifeSpan, 0, 1);
    stroke(0, 255 * normalizedLife);
    fill(127, 255 * normalizedLife); //, 뒤에 투명도
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.life < 0; //lifSpan 값이 0보다 작아질 때 리턴
  }
}
