
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(100,350,60,60);

	dustbin1 = new Dustbin(600,600,20,100);
	dustbin2 = new Dustbin(650,670,100,20);
	dustbin3 = new Dustbin(700,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display
  
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85})
}


}



