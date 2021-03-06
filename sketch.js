var mario,ground;
var score = 0;
var coingroup,brickgroup,enemygroup;
function preload() {
  marioimg = loadAnimation("mario.gif");
  bgimg = loadImage("background.jpg");
  enemy1img = loadAnimation("enemy2.gif");
  enemy2img = loadAnimation("enemy3.gif");
  enemy3img = loadAnimation("enemy4.gif");
coinimg = loadAnimation("coin img.gif");
brickimg = loadImage("brickimg.png");

}



function setup() {
  createCanvas(windowWidth,windowHeight);
  mario = createSprite(50,380,20,20);
  mario.addAnimation("marioimg",marioimg);
  ground = createSprite(width/2,height-80,width,10);
  ground.visible = false;
  brickgroup = new Group ();
  coingroup = new Group ();
  enemygroup = new Group ();
}

function draw() {
  background(bgimg);
  textSize(35);
  fill("white");
  text("SCORE:-"+score,width/2,30);
  if(keyDown(UP_ARROW)){
    mario.velocityY = -5;
    mario.velocityX = 1;
  }
  mario.velocityY = mario.velocityY+0.08;
  mario.collide(ground);
  bricks();
  enemies();
  spawnbonus();
  drawSprites();
}
function bricks(){
  if(frameCount%190 === 0){
     var brick = createSprite(width,380,50,5);
     brick.addImage(brickimg);
     brick.scale = 0.2;
  brick.velocityX = -3;
  brick.y = Math.round(random(20,height-200))
  brickgroup.add(brick);
  }
 
}
function enemies(){
  if(frameCount%170 === 0){
     var enemy = createSprite(400,380,20,20);
     enemy.velocityX = -3;
     enemy.scale = 0.2;
     enemy.y = Math.round(random(20,height-50))
     enemy.x = Math.round(random(20,width))
enemygroup.add(enemy);
     var rand = Math.round(random(1,4));
     switch(rand){
       case 1 : enemy.addAnimation("enemy1img",enemy1img);
       break;
       case 2 : enemy.addAnimation("enemy2img",enemy2img);
       break;
       case 3 : enemy.addAnimation("enemy3img",enemy3img);
       break;
       
       default:break;
     }
     
     
  }
}
function spawnbonus(){
  if(frameCount%150 === 0){
     var coin = createSprite(400,380,20,20);
     coin.addAnimation("coin img",coinimg);
     coin.velocityX = -3;
     coin.scale = 0.1;
     coin.y = Math.round(random(20,height-50))
     coingroup.add(coin);
     coin.x = Math.round(random(20,width))
  }
}