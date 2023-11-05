class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    //길이 1짜리 무작위 방향 속도로 시작함
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.neighborhooodRad = 50;
    this.color = color;
  }

  cohesion(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    //평균 위치를 계산하여 이동 방향 조절
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      }
    });
    //나누기 할거라 0이 아니면 0보다 크면
    //others가 있는 경우
    if (cnt > 0) {
      steer.div(cnt); //평균 위치 계산
      steer.sub(this.pos); //현재 위치에서 빼서 방향을 이동
      steer.setMag(this.speedMx); //최대 이동 속도로 제한
      steer.sub(this.vel); //현재 속도에서 빼서 방향을 조절
      steer.limit(this.forceMx); //이미 제한한 forceMX로 리밋을 검
    }
    return steer;
  }

  align(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    //평균 속도를 계산하여 방향 조절
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
        }
      }
    });
    //나누기 할거라 0이 아니면 0보다 크면
    //others가 있는 경우
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }
  //거리계산 | 나의 반지름 너의 반지름 더한게 거리가 짧으면 만나는거
  separate(others) {
    let cnt = 0; //카운트
    const steer = createVector(0, 0);
    //= for(let idx = 0; idx < others.length; idx++) {ohters[idx]}
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        //충돌하면 만나면 (너 반지름 내 반지름 더햇을 때 차이로)
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          //나한테 오는 벡터 나의 위치에서 each.pos 빼기
          towardMeVec.setMag(1 / distNormal);
          //충돌 했을 때 교차된 영역이 크면 거리가 가까운거임 그래서 dist를 나눠주는거다
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    //나누기 할거라 0이 아니면 0보다 크면
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }
  //외부에서 힘을 받아 가속도에 추가
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  }

  update() {
    this.vel.add(this.acc);
    //speedMx 값이 이미 있지만 확실하게 리밋값을 줌
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0); //acc 값 초기화
  }

  //화면 밖으로 나가면 안으로 다시 나타나게 하기
  borderInfinite() {
    //따로 offset 값을 적용 더 길게 안하고 짧게 적용 시켜서 일괄되게 함
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    } //width가 넘어갔을 때
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    } //height가 넘어갔을 때
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
  }
}
