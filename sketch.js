var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle

var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


    if(gameState !== "end")
  {
    particle = new Particle(mouseX , 10 ,10);
  }
    



    
    
}
 


function draw() {
  background("black");

  Engine.update(engine);
 
 if( particle.body.position.y > 660 && particle.body.position.y < 670 )
  {
    if(particle.body.position.x >= 0 && particle.body.position.x <= 240)
    {
      score+= 500;
    } 

    if(particle.body.position.x >= 240 && particle.body.position.x <= 480)
    {
      score+= 250;
    }

    if(particle.body.position.x >= 480 && particle.body.position.x <= 720)
    {
      score += 125;
    }

    if(particle.body.position.x >= 730 && particle.body.position.x <= 800)
    {
      score += 62;
    }
   
    
  }


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount% 10===0){
     particles.push(particle);
     
   }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }

  if(count === 5 )
  {
    gameState = "end"
    textSize(40);
    stroke("white")
    text("GAME  OVER" , 300 ,230);
  }

  textSize(20)
  text("Score : "+score,20,30);
  textSize(20);
  stroke("white")
  text("500" , 20 , 510);
  text("500" , 100 , 510);
  text("500" , 180 , 510);
  text("250" , 260 , 510);
  text("250" , 340 , 510);
  text("250" , 420 , 510);
  text("125" , 500 , 510);
  text("125" , 580 , 510);
  text("125" , 660 , 510);
  text("62" , 740 , 510);
  
}

function mousePressed()
{
 if(gameState === "play")
 {
  particle = new Particle(mouseX , 10 ,10 , 10);
  count++ ;
  console.log(count)
 


 }

}