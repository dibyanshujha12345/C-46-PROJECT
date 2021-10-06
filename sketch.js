var bgImg;
var doodle;
var doodleAnimate;
var bars;
var monsters;
var coin;
var score=0;
var ground;
var grndImg;
var bar,barG,barImg;
var invisibleGround;

function preload(){
  bgImg = loadImage("background.png");
  doodleAnimate = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
 grndImg = loadImage("road4.jpg");
 barImg = loadImage("brick.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);




  ground = createSprite(width/2,height-100,width,10);
  ground.addImage(grndImg);
  
  ground.velocityX = -5;  

  doodle = createSprite(100,height-100,200,200);
  doodle.addAnimation("jumping",doodleAnimate);
  doodle.scale=0.5;

 barG = new Group(); 

 invisibleGround = createSprite(width/2,height-60,width,10);
  invisibleGround.visible=false;

}

function draw(){
  background(bgImg);

  if(ground.x<width/4){
    ground.x = width/2;
  }
  spawnBars();
  if(keyDown("space") && doodle.y>height-600){
    doodle.velocityY = -5;
    
  }
  doodle.velocityY +=0.5;
  doodle.collide(invisibleGround);
drawSprites();
}

function spawnBars(){
  if(frameCount % 100 ===0){
    bar = createSprite(width/2,height-100,100,10);
    bar.addImage(barImg);
    bar.scale = 0.2;
    bar.velocityX = -5;
    bar.lifetime = 240;
    barG.add(bar);


  }

}