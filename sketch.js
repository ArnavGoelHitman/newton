
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(500,300,20);
	bobObject2 = new Bob(530,300,20);
	bobObject3 = new Bob(560,300,20);
	bobObject4 = new Bob(590,300,20);
	bobObject5 = new Bob(620,300,20);
	roof = new Roof(500,100,40,5);

	chain1 = new Chain(bobObject1.body,roof.body,-20,0);
	chain2 = new Chain(bobObject2.body,roof.body,10,0);
	chain3 = new Chain(bobObject3.body,roof.body,39,0);
	chain4 = new Chain(bobObject4.body,roof.body,70,0);
	chain5 = new Chain(bobObject5.body,roof.body,100,0);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-250,y:300})
	}
}




