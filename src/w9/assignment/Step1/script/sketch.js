var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
  world = engine.world;

// create runner
var runner = Runner.create();

let ropeA, ropeB, ropeC, mouse, mouseConstraint;

function setup() {
  setCanvasContainer('myCanvas', 800, 600, true);

  // add bodies
  var group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
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

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
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

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
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

  (mouse = Mouse.create(document.querySelector('.p5Canvas'))),
    (mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    }));

  Composite.add(world, mouseConstraint);

  Runner.run(runner, engine);
  background('gainsboro');
}

function draw() {
  background('gainsboro');

  // Update the physics engine
  Engine.update(engine);

  // Render the ropes
  for (let i = 0; i < ropeA.bodies.length; i++) {
    fill(255);
    stroke(0);
    beginShape();
    for (let j = 0; j < ropeA.bodies[i].vertices.length; j++) {
      vertex(ropeA.bodies[i].vertices[j].x, ropeA.bodies[i].vertices[j].y);
    }
    endShape(CLOSE);
  }

  for (let i = 0; i < ropeB.bodies.length; i++) {
    fill(255);
    stroke(0);
    ellipse(
      ropeB.bodies[i].position.x,
      ropeB.bodies[i].position.y,
      ropeB.bodies[i].circleRadius * 2
    );
  }

  for (let i = 0; i < ropeC.bodies.length; i++) {
    fill(255);
    stroke(0);
    beginShape();
    for (var j = 0; j < ropeC.bodies[i].vertices.length; j++) {
      vertex(ropeC.bodies[i].vertices[j].x, ropeC.bodies[i].vertices[j].y);
    }
    endShape(CLOSE);
  }
}
