
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var stone1;
var plane1;
var rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7;
var iron1;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	plane1=new Plane(600,600,1200,10);
	hammer1=new Hammer(600,1100,200,50);
    iron1=new Iron(400,300,80,50);
	rubber1=new Rubber(900,300,80);
	sand1=new Sand(500,300,1);
	sand2=new Sand(510,300,1);
	sand3=new Sand(520,300,1);
	sand4=new Sand(530,300,1);
	sand5=new Sand(540,300,1);
	sand6=new Sand(550,300,1);
	sand7=new Sand(560,300,1);
    stone1=new Stone(700,300,100,100);



Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lightskyblue");

	drawSprites();
  
  plane1.display();
  hammer1.display();
  iron1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  stone1.display();
 
}



