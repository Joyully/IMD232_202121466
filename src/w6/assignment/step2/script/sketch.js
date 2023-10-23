let emitter;
let gravity;

function setup() {
  setCanvasContainer('myCanvas', 6, 4, true);

  emitter = new Emitter(mouseX, mouseY, 10);
  gravity = createVector(0, 0.1);

  background('gainsboro');
}

function draw() {
  background('gainsboro');
  // for (let a = 0; a < 100; a++) {
  //   if (mouseIsPressed) {
  //     emitter.setPosition(mouseX, mouseY);
  //     emitter.addParticle(a);
  //   }
  // }

  emitter.update(gravity);
  emitter.display();
  // emitter.addParticle();

  console.log(emitter.particles.length);
}

function mouseClicked() {
  for (let a = 0; a < 150; a++) {
    emitter.setPosition(mouseX, mouseY);
    emitter.addParticle(a);
  }
}
