let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  particle = new Particle(); //() 값은 위치 -> 고정이 됨
  gravity = createVector(0, 0.08);
  colorMode(HSL, 360, 100, 100, 100);

  background('gainsboro');
}

function draw() {
  background('gainsboro');
  particleArray.push(new Particle());
  // console.log(particle.isDead()); //화면 밖을 넘어가니까 트루.. 우ㅏㄷ다ㅏ
  if (particle.isDead()) {
    particle = new Particle();
  } //파티클이 죽으면 다시 돌아오게 if 구문
  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display(gravity);
  }

  //끝없이 어레이 값이 올라가서 제한을 주기 위한 for 구문
  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      //수명이 다 되면.. isDead조건 splice로 걷어내는
      particleArray.splice(a, 1);
    }
  }

  console.log(particleArray.length);
}
