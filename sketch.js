var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage;
var c1,c2,c3,c4,c5,c6

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  c1 = loadImage("obstacle1.png");
  c2 = loadImage("obstacle2.png");
  c3 = loadImage("obstacle3.png");
  c4 = loadImage("obstacle4.png");
  c5 = loadImage("obstacle5.png");
  c6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  spawnClouds();
  spawnCactus();
  
}

function spawnClouds(){
if(frameCount%60===0){
  
  var ran=Math.round(random(50,150));
  var cloud=createSprite(550,ran,10,10);
  cloud.velocityX=-2;
  console.log(ran);
  cloud.scale=0.5;
  cloud.addImage("cloud",cloudImage);
  cloud.lifetime=550/2;
  
  
} 
}

function spawnCactus(){
  if(frameCount%80===0){
  var cactus=createSprite(550,180,10,10);
    cactus.velocityX=-2; 
    var ran2 = Math.round(random(1,6));
    cactus.scale=0.5;
    cactus.lifetime=550/2;
    switch(ran2){
      case 1:cactus.addImage("c1",c1);
      break;
      case 2:cactus.addImage("c2",c2);
      break;
      case 3:cactus.addImage("c3",c3);
      break;
      case 4:cactus.addImage("c4",c4);
      break;
      case 5:cactus.addImage("c5",c5);
      break;
      case 6:cactus.addImage("c6",c6);
      break;
      
      default:console.log("ran2")
        break;
    }
  }
  
  
  
}