let particle;
let gravity = 0;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  particle = new Particle(width / 2, 20); //() 값은 위치 -> 고정이 됨
  gravity = createVector(0, 0.1);

  background('gainsboro');
}

function draw() {
  // console.log(particle.isDead()); //화면 밖을 넘어가니까 트루.. 우ㅏㄷ다ㅏ
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
  } //파티클이 죽으면 다시 돌아오게 if 구문
  particle.applyForce(gravity);
  particle.update();
  background('gainsboro');
  particle.display();
}
