
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight)
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(windowWidth-450, windowHeight - 400, "grey");
	sling1 = new Sling(pendulum1.body,{x:windowWidth-450, y:windowHeight - 400});
	pendulum2 = new Pendulum(windowWidth-510, windowHeight - 400, "grey");
	sling2 = new Sling(pendulum2.body,{x:windowWidth-510, y:windowHeight - 400});
	pendulum3 = new Pendulum(windowWidth-570, windowHeight - 400, "grey");
	sling3 = new Sling(pendulum3.body,{x:windowWidth-570, y:windowHeight - 400});
	pendulum4 = new Pendulum(windowWidth-630, windowHeight - 400, "grey");
	sling4 = new Sling(pendulum4.body,{x:windowWidth-630, y:windowHeight - 400});
	pendulum5 = new Pendulum(windowWidth-690, windowHeight - 400, "grey");
	sling5 = new Sling(pendulum5.body,{x:windowWidth-690, y:windowHeight - 400});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  pendulum1.display();
  sling1.display();
  pendulum2.display();
  sling2.display();
  pendulum3.display();
  sling3.display();
  pendulum4.display();
  sling4.display();
  pendulum5.display();
  sling5.display();
  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}



