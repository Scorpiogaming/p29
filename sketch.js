const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;
var ground1,ground2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,rope1,ball1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new ground(520,470,400,20);
   ground2=new ground(950,250,400,20);
   block1=new block(460,400,50,50);
   block2=new block(410,400,50,50);
   block3=new block(360,400,50,50);
   block4=new block(510,400,50,50);
   block5=new block(560,400,50,50);
   block6=new block(460,350,50,50);
   block7=new block(510,350,50,50);
   block8=new block(410,350,50,50);
   block9=new block(460,300,50,50);
   block10=new block(930,200,50,50);
   block11=new block(980,200,50,50);
   block12=new block(880,200,50,50);
   block13=new block(1030,200,50,50);
   block14=new block(830,200,50,50);
   block15=new block(930,150,50,50);
   block16=new block(980,150,50,50);
   block17=new block(880,150,50,50);
   block18=new block(930,100,50,50);
   ball1=new ball(100,360,50);
   rope1=new rope(ball1.body,{x:100,y:350});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  text(mouseX+" "+mouseY,mouseX,mouseY);
  drawSprites();
 ground1.display();
 ground2.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("red");
  block6.display();
  block7.display();
  block8.display();
  fill("green");
  block9.display();
  fill("blue");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("red");
  block15.display();
  block16.display();
  block17.display();
  fill("green");
  block18.display();
  ball1.display();
  rope1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope1.fly()
  
}
