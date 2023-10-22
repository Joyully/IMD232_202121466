let emitter;
let emitters = []; //array시키기
let gravity = 0;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  emitter = new Emitter(width / 2, 20);
  gravity = createVector(0, 0.1);

  background('gainsboro');
}

function draw() {
  // if (mouseIsPressed) {
  //   emitter.addParticle();
  // }

  emitter.addParticle();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background('gainsboro');
  emitter.update(gravity);
  emitter.display();
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }
  console.log(emitter.particles.length);
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
