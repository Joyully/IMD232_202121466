let emitter;
let gravity;

function setup() {
  setCanvasContainer('myCanvas', 6, 4, true);

  emitter = new Emitter(mouseX, mouseY, 10, 60);
  gravity = createVector(0, 0.1);

  background('gainsboro');
}

function draw() {
  if (mouseIsPressed) {
    for (let a = 0; a < 100; a++) {
      emitter.setPosition(mouseX, mouseY);
      emitter.addParticle(a);
    }
  }

  // emitter.addParticle();

  background('gainsboro');
  emitter.update(gravity);
  emitter.display();

  console.log(emitter.particles.length);
}
