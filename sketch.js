
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fruitsGroup, obstacleGroup;
var score,bananaScore;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(50,374,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,375,400,10);
  ground.x=ground.width/2;
  
  score=0;
  bananaScore=0;
  
  fruitsGroup=new Group();
  obstacleGroup=new Group();
  
  
  
}


function draw() {
  background("cyan");
  
if (ground<0){
   ground.velocityX=ground.width/2;
}
  
  score=Math.ceil(frameCount/frameRate())

if (keyDown("space")&&monkey.y>200){
 monkey.velocityY= -18;
}
  monkey.velocityY=monkey.velocityY+1;
    
  monkey.collide(ground);  
  

if (fruitsGroup.isTouching(monkey)){
  bananaScore=bananaScore+1;
  fruitsGroup.destroyEach();
}

if (obstacleGroup.isTouching(monkey)){
  score=0;
  obstacleGroup.destroyEach();
}
  
  fruits();
  obstacle();
  drawSprites();
  textSize(20);
  fill("yellow");
  text("BANANA "+bananaScore,10,20);
  textSize(20);
  fill("black");
  text("SURVIVAL TIME "+score,200,20);
}
function fruits(){
  if (frameCount%80===0){
  banana=createSprite(400,250,15,15);
  banana.addImage("banana",bananaImage);
  banana.velocityX=-6;
  banana.scale=0.1;
  banana.lifetime=65;
    
  fruitsGroup.add(banana);
  }
}
function obstacle(){
  if (frameCount%60===0){
  var obstacle=createSprite(400,352,10,10);
  obstacle.addImage("obstacles",obstacleImage);
  obstacle.velocityX=-5;
  obstacle.scale=0.1;
  obstacle.lifetime=85;
  
  obstacleGroup.add(obstacle);
  }
}




