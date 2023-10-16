let pendulums = [];
let gravity;

function setup() {
  setCanvasContainer('myCanvas', 2, 1, true);

  for (let a = 0; a < 2; a++) {
    pendulums.push(
      new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25)
    );
  }

  gravity = createVector(0, 0.5);

  background('gainsboro');
}

function draw() {
  background('gainsboro');

  for (let a = 0; a < pendulums.length - 1; a++) {
    pendulums[a].applyGravity(gravity);
    pendulums[a].update();
    pendulums[a].display();

    let nextPendulum = pendulums[a + 1];
    nextPendulum.pos.x = pendulums[a].ballPos.x;
    nextPendulum.pos.y = pendulums[a].ballPos.y;
  }

  pendulums[pendulums.length - 1].applyGravity(gravity);
  pendulums[pendulums.length - 1].update();
  pendulums[pendulums.length - 1].display();
}

function mouseMoved() {
  pendulums.forEach((pendulum) => pendulum.mouseMoved(mouseX, mouseY));
}

function mousePressed() {
  pendulums.forEach((pendulum) => pendulum.mousePressed(mouseX, mouseY));
}

function mouseDragged() {
  pendulums.forEach((pendulum) => pendulum.mouseDragged(mouseX, mouseY));
}

function mouseReleased() {
  pendulums.forEach((pendulum) => pendulum.mouseReleased());
}
