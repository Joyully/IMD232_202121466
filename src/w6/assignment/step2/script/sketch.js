let emitter;
let emitters = [];
let gravity = 0;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  emitter = new Emitter(width / 2, height / 2);
  gravity = createVector(0, 0.1);

  background('gainsboro');
}

function draw() {
  // background('gainsboro');
  if (mouseIsPressed) {
    emitter.addParticle();
  }

  // for (let i = 0; i < emitters.length; i++) {
  //   emitters[i].addParticle();
  // }

  emitter.update(gravity);

  background('gainsboro');

  emitter.addParticle();
  emitter.display();

  console.log(emitter.particles.length);
}
// function mousePressed() {
//   emitters.push(new Emitter(mouseX, mouseY));
// }
