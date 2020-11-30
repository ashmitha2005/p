var ground, binleft, binright, binbottom, paper;
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
	ground = new Ground(400,height- 20,800,20);
	paper = new Paper(100,650,60);
	binleft = new Dustbin(500,595,20,150);
	binright = new Dustbin(700,595,20,150);
	binbottom = new Dustbin(600,659,215,20);


	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  binleft.display();
  binright.display();
  binbottom.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}














