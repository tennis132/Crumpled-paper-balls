
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
	ground1 = new Ground(400,690,800,5)
	ground2 = new Ground(600,663,5,50)
	ground3 = new Ground(700,663,5,50)

	ball1 = new Ball(100,100,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.velocityY = 5
  
  drawSprites();
 
  ground1.display()
  ground2.display()
  ground3.display()
  ball1.display()

  keyPressed()
}

function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		Matter.Body.setVelocity(ball1.body,{x:2, y:-5})
	}
}



