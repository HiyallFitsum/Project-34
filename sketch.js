
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 800)
	//createCanvas(windowWidth/2, windowHeight/2);
	engine = Engine.create();
	world = engine.world;

	//let canvasmouse = Mouse.create(canvas.elt);
	//canvasmouse.pixelRatio = pixelDensity();
	//let options = {
		//mouse: canvasmouse
	//}
	//mConstraint = MouseConstraint.create(engine, options);
	//World.add(world, mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(windowWidth-50, windowHeight - 400, "grey");
	pendulum2 = new Pendulum(windowWidth-70, windowHeight - 400, "grey");
	pendulum3 = new Pendulum(windowWidth-90, windowHeight - 400, "grey");
	pendulum4 = new Pendulum(windowWidth-110, windowHeight - 400, "grey");
	pendulum5 = new Pendulum(windowWidth-130, windowHeight - 400, "grey");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}



