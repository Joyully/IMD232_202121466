let emitters = []; //array시키기
let gravity = 0;
let repeller;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  for (let i = 0; i < 5; i++) {
    emitters.push(new Emitter((width / 6) * (i + 1), 20));
    //갯수 지정해서 만들 수 있음 (i+1) 등간격 조정함 width/6 *i, 20 은 5개만 있었음 왼쪽 부터
  }
  gravity = createVector(0, 0.1);

  repeller = new Repeller(width / 2, height / 2, 3000);

  background('gainsboro');
}

function draw() {
  // if (mouseIsPressed) {
  //   emitter.addParticle();
  // }

  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background('gainsboro');

  for (let i = 0; i < emitters.length; i++) {
    emitters[i].applyGravity(gravity);
    emitters[i].applyRepeller(repeller);
    emitters[i].update();
    emitters[i].display();
  }

  repeller.display();
}

function mouseMoved() {
  repeller.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  repeller.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  repeller.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  repeller.mouseReleased();
}
