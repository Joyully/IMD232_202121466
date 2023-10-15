// let aMover;
let movers = [];
const moversNum = 20;
let mVec;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  //   aMover = new Mover(width / 2, height / 2, 10, 25, 'blue');
  colorMode(HSL, 360, 100, 100, 100);
  for (let a = 0; a < moversNum; a++) {
    movers.push(
      new Mover(
        random(width),
        random(height),
        10,
        25,
        color(random(360), 100, 50, 50)
      )
    );
  }
  mVec = createVector();
  background('gainsboro');
}

function draw() {
  mVec.set(mouseX, mouseY);
  //1
  //   //amover에서 마우스를 향하는 백터 마우스에서 무버값 빼기
  //   const dirVec = p5.Vector.sub(mVec, aMover.pos);
  //   dirVec.setMag(0.5);
  //   //0.5 수준의 가속력을 가지게 함
  // aMover.applyForce(dirVec);
  // aMover.update();

  //   background('gainsboro');
  //   aMover.display();
  //   aMover.displayVectors();

  //2
  //   for (let a = 0; a < movers.length; a++) {
  //     const dirVec = p5.Vector.sub(mVec, movers[a].pos);
  //     dirVec.setMag(0.5);
  //     movers[a].applyForce(dirVec);
  //     movers[a].update();
  //   }

  //   background('gainsboro');

  //   for (let a = 0; a < movers.length; a++) {
  //     movers[a].display();
  //     movers[a].displayVectors();
  //   }

  //3
  for (let a = 0; a < movers.length; a++) {
    const dirVec = p5.Vector.sub(mVec, movers[a].pos);
    dirVec.setMag(0.5);
    movers[a].applyForce(dirVec);
    movers[a].update();
  }

  background('gainsboro');
  movers.forEach((anyName) => {
    anyName.display();
    anyName.displayVectors();
  });
}
