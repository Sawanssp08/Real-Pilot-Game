var player, playerani;

var logo,logoimg;

var background1,backgroundimg;

var tree, treeimg, treegroup;

var stone,stoneimg, stonegroup;

var invisibleground;

var coins, coinsimg, coingroup;

var birds, birdsimg, birdsgroup;

var snake, snakeimg, snakegroup;

var score = 0;

var burst;

var sound;

var qr;

var gameover, gameoverimg;

var diamonds, diamondimg;

var treasure, treasureimg;

function preload() {
  
  playerani = loadAnimation("plane2.png");
  
  backgroundimg = loadImage("bg4.png");
  
  treeimg = loadImage("planee3.png");
  
  stoneimg = loadImage("planee4.png");
  
  gameoverimg = loadImage("plbg.jpg")
 
  burst=loadSound("explosion.mp3")
  //coinsimg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");
  qr=loadSound("song22.mp3")
  
  //logoimg=loadImage("download (12) (1).jpg")
  
  sound=loadSound("Airplane White Noise in 1st Class _ Sleep, Study, Focus _ 10 Hour Plane Sound (256 kbps) (mp3cut.net) (1).mp3")
  
  birdsimg = loadAnimation("bird1.png", "bird2.png", "bird3.png");
  
  snakeimg = loadAnimation("planee5.png")
}

function setup() {
  createCanvas(600, 400);
 
 // sound.loop();
  qr.loop();
  
   background1 = createSprite(200,300,10,10);
   background1.addImage(backgroundimg);
   background1.velocityX = -(6 + 3*score/100);
  background1.scale=3;
  
   player = createSprite(150,350,10,10);
   player.addAnimation("playerani",playerani);
   player.scale = 0.7;
  
 //logo=createSprite(300,30,10,10);
  //logo.addAnimation("logoimg",logoimg);
 // logo.scale=0.5;
  
   invisibleground = createSprite(200,200,800,5);
  
   invisibleground.visible = false;
  
   treegroup = new Group();
   stonegroup = new Group();
  // coingroup = new Group();
   birdsgroup = new Group();
   snakegroup = new Group();
  
   coinscollect = 0;
  
}

function draw() {
  background(53,152,210);
  
  spawntree();
  spawnStones();
 // spawncoins1();
 // spawncoins2();
  spawnbirds();
  spawnsnake();
  
   player.collide(invisibleground);
  
  
    textSize(25);
    fill("white")
    text("Score: "+ score, 20,50);
   // text("Coins Collected: "+ coinscollect,20,100);
  
    score = score + Math.round(getFrameRate()/60);
  
   if (background1.x<0 ){
       background1.x=background1.width/2 
   }
  
 // if (player.isTouching(coingroup)) {
   //    coingroup.destroyEach();
   // coinscollect = coinscollect + 1;
   // score = score + 20;
 // }
  
 //   if (keyDown("UP_ARROW")  ){
   //      player.velocityY = -23;
  //  }
  player.y = World.mouseY;
  
  if (player.isTouching(stonegroup) ||player.isTouching(snakegroup)||
player.isTouching(treegroup))   
  {
       player.velocity = 0;
       gameover = createSprite(240,260,10,10);
       gameover.addImage(gameoverimg);
       gameover.scale = 0.8;
    burst.play();
    qr.stop();
        
      }
  
  player.velocityY = player.velocityY + 2;
  
  drawSprites();
}

function spawntree() {
    if(frameCount % 400 === 0) {
     tree = createSprite(800,100,10,40);
     tree.addImage(treeimg);
     tree.velocityX = -(6 + 3*score/100);
     tree.scale = 0.7; 
     tree.lifetime = 220;

  treegroup.add(tree);
}
}

function spawnStones() {
  if(frameCount % 250 === 0) {
      stone = createSprite(800,330,10,40);
      stone.addImage(stoneimg);
      stone.velocityX = -(6 + 3*score/100);
      stone.scale = 0.7; 
      stone.lifetime = 220;
    
    //stone.debug = true;
    stone.setCollider("rectangle",0,0,30,30)

  stonegroup.add(stone);
}

/*
function spawncoins1() {
    if(frameCount % 125 === 0) {
      coins = createSprite(800,230,10,40);
      coins.addAnimation("coinsimg",coinsimg);
      coins.velocityX = -(6 + 3*score/100);
      coins.scale = 0.1; 
      coins.lifetime = 220;

  coingroup.add(coins);
}
*/
}
/*
function spawncoins2() {
    if(frameCount % 135 === 0) {
      coins = createSprite(800,250,10,40);
      coins.addAnimation("coinsimg",coinsimg);
      coins.velocityX = -(6 + 3*score/100);
      coins.scale = 0.1; 
      coins.lifetime = 220;

  coingroup.add(coins);
}
}
*/
function spawnbirds() {
      if(frameCount % 110 === 0) {
      birds = createSprite(800,200,10,40);
      birds.addAnimation("birdsimg",birdsimg);
      birds.velocityX = -(6 + 3*score/100);
      birds.scale = 0.250; 
      birds.lifetime = 220;

  birdsgroup.add(birds);
}  
}

function spawnsnake() {
    if(frameCount % 185 === 0) {
      snake = createSprite(800,200,10,40);
      snake.addAnimation("snakeimg",snakeimg);
      snake.velocityX = -(6 + 3*score/100);
      snake.scale = 0.7; 
      snake.lifetime = 220;
      
     // snake.debug = true;
      snake.setCollider("rectangle",0,0,20,20)

  snakegroup.add(snake);
}
}