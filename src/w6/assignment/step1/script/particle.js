class Particle {
  constructor() {
    this.pos = createVector(random(width), -100);
    // this.vel = p5.Vector.random2D();
    //랜덤한 방향으로 1짜리 백터밖에 안감
    this.vel = createVector(0, 0); //특정한 정해진 0도의 방향으로 길이 1짜리
    // this.vel.rotate((TAU / 360) * random(15));
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 400;
    this.angle = 0;
    this.angleVel = (TAU / 360) * random(360);
    this.color = color(random(360), 100, 50, 50);
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //acc 값 초기화
    this.lifeSpan -= 2; //매번 2씩 빼줌
    this.angle += this.angleVel;
  }

  display() {
    noStroke(0);
    fill(this.color); //, 뒤에 투명도
    push(); // 현재의 변환 상태를 저장
    translate(this.pos.x, this.pos.y);
    rotate(this.angle); // 회전 각도 적용
    rect(-this.rad, -this.rad, this.rad * 2, this.rad * 2); // 중앙으로 맞춘 후 사각형 그리기
    pop(); // 저장한 변환 상태를 복원
  }

  isDead() {
    return this.lifeSpan < 0; //lifSpan 값이 0보다 작아질 때 리턴
  }
}
