let petals = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < random(5, 15); i++) {
    petals.push(new Petal());
  }
}

function draw() {
  background(220);

  // 그림자를 표시하기 위해 가운데에 꽃 수술 원을 그려줘
  noStroke();
  fill(255, 200, 200);
  ellipse(width / 2, height / 2, 50, 50);

  // 꽃잎을 갱신하고 그려줘
  for (let petal of petals) {
    petal.update();
    petal.display();
  }
}

function mousePressed() {
  // 마우스를 클릭할 때마다 새로운 꽃잎을 생성해줘
  petals.push(new Petal());
}

class Petal {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(0, 0.05);
    this.radius = random(10, 30);
  }

  update() {
    // 중력과 가속값 적용
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    // 가운데에 꽃 수술 원에 닿으면 멈춰줘
    let distance = dist(
      this.position.x,
      this.position.y,
      width / 2,
      height / 2
    );
    if (distance < 25 + this.radius / 2) {
      this.velocity.mult(0);
    }
  }

  display() {
    // 꽃잎 그리기
    fill(255, 255, 0);
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
}
