class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = p5.Vector.random2D(); 랜덤한 방향으로 1짜리 백터밖에 안감
    this.vel = createVector(1, 0); //특정한 정해진 0도의 방향으로 길이 1짜리
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.rad = 5;
    this.lifeSpan = 255;
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //acc 값 초기화
    this.lifeSpan -= 2; //매번 2씩 빼줌
  }

  display() {
    stroke(0, this.lifeSpan);
    fill(127, this.lifeSpan); //, 뒤에 투명도
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  isDead() {
    return this.lifeSpan < 0; //lifSpan 값이 0보다 작아질 때 리턴
  }
}
