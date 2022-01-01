const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1;
var ground1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(480, 340);
	paper1 = new Paper(200, 100, 20);
	ground1 = new Ground(400, 400, 800, 20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  paper1.display();
  ground1.display();



  if(keyWentDown("UP_ARROW")) {
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:55, y:-55})
  }
 
}




