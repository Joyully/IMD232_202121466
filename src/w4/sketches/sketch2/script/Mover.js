class Mover {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  //공튀기게 하기
  checkEdges() {
    if (this.pos.x < 0) {
      // // 0보다 얼마나 뚫고 갔는가
      // let delta = this.pos.x - 0;
      // // 뚫고간 거리를 곱해서 양수로 만들어 방향 전환
      // delta *= -1;
      // //0 기준으로 뒤집힌 거리를 더해준다.
      // this.pos.x = 0 + delta;

      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill('white');
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  //공의 속도와 가속도 묘사
  displayVector() {
    stroke('deeppink');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
