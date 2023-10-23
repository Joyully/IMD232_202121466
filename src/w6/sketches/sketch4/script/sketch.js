let emitter;
let gravity;
let isMousePressed = false;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  gravity = createVector(0, 0.2);

  emitter = new Emitter(width / 2, height / 2);
  background('gainsboro');
}

function draw() {
  if (isMousePressed) {
    emitter.setPosition(mouseX, mouseY);
    emitter.emitParticles(100);
    isMousePressed = false;
  }

  background('gainsboro');
  emitter.update(gravity);
  emitter.display();

  console.log(emitter.particles.length);
}

function mousePressed() {
  isMousePressed = true;
}
