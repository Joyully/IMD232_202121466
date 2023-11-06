class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y); //위치
    //길이 1짜리 무작위 방향 속도로 시작함
    this.vel = p5.Vector.random2D();
    this.acc = createVector(); //가속도
    this.mass = mass; //질량
    this.rad = rad; //반지름
    this.speedMx = speedMx; //
    this.forceMx = forceMx; //값이 커지면 선회력이 좋아짐 1이면 직각
    this.neighborhooodRad = 50; //다른 원의 반지름 반경
    this.color = color; //색상
  }

  cohesion(others) {
    let cnt = 0;
    const steer = createVector(0, 0);
    //평균 위치를 계산하여 이동 방향 조절
    others.forEach((each) => {
      //거리 제곱 계산 this원과 each다른 원의 거리 제곱을 계산하여 거리를 가늠
      //제곱이 주어진 반경의 제곱보다 작은 경우
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos); //다른 each의 위치를 더함
          cnt++; //1나씩 더함
        }
      }
    });
    //나누기 할거라 0이 아니면 0보다 크면
    if (cnt > 0) {
      steer.div(cnt); //카운트를 나눔 평균 위치 계산
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
          //두 개체 사이의 거리 제곱이 반경의 제곱보다 작은지 확인
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; //1씩 더함
        }
      }
    });
    //나누기 할거라 0이 아니면 0보다 크면
    if (cnt > 0) {
      steer.div(cnt); //카운트를 나눔 속도 계산
      steer.setMag(this.speedMx); // 최대 이동속도로 제한
      steer.sub(this.vel); //속도에서 빼서 방향 조절
      steer.limit(this.forceMx); //forceMx 값을 리밋을 검
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
        //충돌하면 만나면 (나의 반지름과 너의 반지름의 합이 거리보다 클 때)
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          //나한테 오는 벡터 나의 위치에서 each.pos 빼기
          towardMeVec.setMag(1 / distNormal);
          //충돌 했을 때 교차된 영역이 크면 거리가 가까운거임 그래서 dist를 나눠주는거다
          steer.add(towardMeVec); //충돌 방향 더함
          cnt++;
        }
      }
    });
    //나누기 할거라 0이 아니면 0보다 크면
    if (cnt > 0) {
      steer.div(cnt); //충돌 개체 방향
      steer.setMag(this.speedMx); //speedMx 값으로 설정
      steer.sub(this.vel); //속대에서 빼서 방향 조절
      steer.limit(this.forceMx); //forceMx 값을 리밋
    }
    return steer;
  }
  //외부에서 힘을 받아 가속도에 추가
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass); //힘에서 질량 빼기
    this.acc.add(forceDivedByMass); //가속에 질량을 더해줌
  }

  update() {
    this.vel.add(this.acc); //속도에 가속도를 더해줌
    //speedMx 값이 이미 있지만 확실하게 리밋값을 줌
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel); //위치 속돌르 더함
    this.acc.mult(0); //acc 값 초기화
  }

  //화면 밖으로 나가면 안으로 다시 나타나게 하기
  borderInfinite() {
    //따로 offset 값을 적용 더 길게 안하고 짧게 적용 시켜서 일괄되게 함
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    } //width가 넘어갔을 때 offset 값 만큼 넘어갔을 때
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    } //height가 넘어갔을 때 offset 값 만큼 넘어갔을 때
  }
  //캔버스에 시각적으로 나올 요소
  display() {
    push(); //넣고
    translate(this.pos.x, this.pos.y); //중심위치 바꾸기
    rotate(this.vel.heading()); //회전
    noStroke(); //스트로크 획 없이
    fill(this.color); //설정한 색 값 채우기
    beginShape(); //도형 만들기
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
    pop(); //사라짐
  }
}
