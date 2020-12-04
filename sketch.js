
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1, dustbin1, dustbin2, dustbin3, paper1;

function preload(){

}


function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600, height, 800, 20);
	dustbin1 = new Dustbin(600, 40, 200, 20 );
	dustbin2 = new Dustbin(560, 40, 20, 100 );
	dustbin2 = new Dustbin(640, 40, 20, 100 );
    paper1 = new Paper(60, 40, 30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-885})
	}
}


