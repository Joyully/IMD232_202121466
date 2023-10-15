let moverNM;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  background('gainsboro');
  moverNM = new Mover(width / 2, height / 2, 25);
}

function draw() {
  background('gainsboro');
  moverNM.update();
  moverNM.checkEdges();
  moverNM.display();
  moverNM.displayVector();
}
