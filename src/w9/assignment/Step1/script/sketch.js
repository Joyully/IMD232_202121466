const {
  Engine,
  Render,
  Runner,
  Body: MatterBody,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

Common.setDecomp(decomp);

// create engine
var engine = Engine.create(),
  world = engine.world;

// create runner
var runner = Runner.create();

let ropeA;
let ropeB;
let ropeC;
let mouse, mouseConstraint;

function setup() {
  setCanvasContainer('myCanvas', 800, 600, true);

  const concA = [
    { x: 192 / 3, y: 40 / 3 },
    { x: 32 / 3, y: 48 / 3 },
    { x: 78 / 3, y: 154 / 3 },
    { x: 118 / 3, y: 108 / 3 },
    { x: 160 / 3, y: 150 / 3 },
  ];

  const concB = [
    { x: 125 / 3, y: 52 / 3 },
    { x: 161 / 3, y: 104 / 3 },
    { x: 202 / 3, y: 52 / 3 },
    { x: 268 / 3, y: 90 / 3 },
    { x: 260 / 3, y: 188 / 3 },
    { x: 202 / 3, y: 228 / 3 },
    { x: 165 / 3, y: 188 / 3 },
    { x: 122 / 3, y: 231 / 3 },
    { x: 64 / 3, y: 192 / 3 },
    { x: 52 / 3, y: 102 / 3 },
  ];

  const concC = [
    { x: 160 / 4, y: 56 / 4 },
    { x: 177 / 4, y: 84 / 4 },
    { x: 196 / 4, y: 61 / 4 },
    { x: 214 / 4, y: 105 / 4 },
    { x: 316 / 4, y: 56 / 4 },
    { x: 318 / 4, y: 257 / 4 },
    { x: 219 / 4, y: 255 / 4 },
    { x: 202 / 4, y: 231 / 4 },
    { x: 184 / 4, y: 253 / 4 },
    { x: 166 / 4, y: 200 / 4 },
    { x: 53 / 4, y: 252 / 4 },
    { x: 56 / 4, y: 78 / 4 },
  ];

  const RandomVer = (vertices) => {
    return vertices.map((vertex) => ({
      x: vertex.x + Math.random() * 10 - 5,
      y: vertex.y + Math.random() * 10 - 5,
    }));
  };

  const Body1 = decomp.quickDecomp(concA);
  const Body2 = decomp.quickDecomp(concB);
  const Body3 = decomp.quickDecomp(concC);

  // add bodies
  var group = MatterBody.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, RandomVer(concA), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });

  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = MatterBody.nextGroup(true);

  ropeB = Composites.stack(350, 50, 6, 1, 5, 5, function (x, y) {
    return Bodies.fromVertices(x, y, RandomVer(concB), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = MatterBody.nextGroup(true);

  ropeC = Composites.stack(600, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, RandomVer(concC), {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(world, mouseConstraint);

  background('gainsboro');
  Runner.run(runner, engine);
}

function draw() {
  background('gainsboro');
  colorMode(HSL);
  noStroke();

  // Update the physics engine
  Engine.update(engine);
  // concA 그리기
  fill('slateblue');
  drawParts(ropeA);

  // concB 그리기
  fill('deeppink');
  drawParts(ropeB);

  // concC 그리기

  fill('salmon');
  drawParts(ropeC);

  console.log('length', ropeC.bodies[1].parts.length);
}
function drawParts(rope) {
  rope.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex((eachVertex.x / 800) * width, (eachVertex.y / 600) * height);
      });
      endShape(CLOSE);
    });
  });
}

//   // Render the ropes
//   for (let i = 0; i < ropeA.bodies.length; i++) {
//     fill(255);
//     stroke(0);
//     beginShape();
//     for (let j = 0; j < ropeA.bodies[i].vertices.length; j++) {
//       vertex(ropeA.bodies[i].vertices[j].x, ropeA.bodies[i].vertices[j].y);
//     }
//     endShape(CLOSE);
//   }

//   for (let i = 0; i < ropeB.bodies.length; i++) {
//     fill(255);
//     stroke(0);
//     ellipse(
//       ropeB.bodies[i].position.x,
//       ropeB.bodies[i].position.y,
//       ropeB.bodies[i].circleRadius * 2
//     );
//   }

//   for (let i = 0; i < ropeC.bodies.length; i++) {
//     fill(255);
//     stroke(0);
//     beginShape();
//     for (var j = 0; j < ropeC.bodies[i].vertices.length; j++) {
//       vertex(ropeC.bodies[i].vertices[j].x, ropeC.bodies[i].vertices[j].y);
//     }
//     endShape(CLOSE);
//   }
// }
