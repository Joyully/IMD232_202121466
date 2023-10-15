class MoverWithMass {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = mass ** 0.5 * 10;
    this.isHover;
    this.isDragging;
    this.draggingOffset;
  }

  //f/m=a 힘 값 적용하기
  applyForce(force) {
    if (!this.isDragging) {
      let forceDividedByMass = createVector(force.x, force.y);
      forceDividedByMass.div(this.mass);
      this.acc.add(forceDividedByMass);
    }
  }

  update() {
    if (!this.isDragging) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.accDisplay.set(this.acc);
      this.acc.mult(0);
    }
  }

  contackEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  //공튀기게 하기
  checkEdges() {
    //0.5 절반으로 생각하면 팅김의 정도를 가늠
    const bounce = -0.7;
    if (this.pos.x < 0 + this.radius) {
      // // 0보다 얼마나 뚫고 갔는가
      // let delta = this.pos.x - 0;
      // // 뚫고간 거리를 곱해서 양수로 만들어 방향 전환
      // delta *= -1;
      // //0 기준으로 뒤집힌 거리를 더해준다.
      // this.pos.x = 0 + delta;

      this.pos.x -= 0 + this.radius;
      this.pos.x *= -1;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
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
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.radius ** 2;
  }

  mousePressed(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.radius ** 2;
    if (this.isHover) {
      this.isDragging = true;
      this.draggingOffset = createVector(this.pos.x - mX, this.pos.y - mY);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX + this.draggingOffset.x;
      this.pos.y = mY + this.draggingOffset.y;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
