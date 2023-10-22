// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  particle = new Particle(width / 2, 20); //() 값은 위치 -> 고정이 됨
  gravity = createVector(0, 0.1);
  // for (let a = 0; a < 8000; a++) { //8000부터 시작
  //   particleArray.push(new Particle(width / 2, 20));
  // }

  background('gainsboro');
}

function draw() {
  particleArray.push(new Particle(width / 2, 20));
  background('gainsboro');

  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display(gravity);
  }

  //끝없이 어레이 값이 올라가서 제한을 주기 위한 for 구문
  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      //수명이 다 되면.. isDead조건 splice로 뭐 걷어내는.. 그런거
      particleArray.splice(a, 1);
    }
  }

  console.log(particleArray.length);
}
