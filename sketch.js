var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(200,200,50,50);
  
  movingRect.shapeColor= "green";
  fixedRect.shapeColor= "green";

  movingRect.velocityY= -5;
  fixedRect.velocityY= 5;

}

function draw() {
  background(0,0,0); 

  movingRect.y=World.mouseY
  movingRect.x=World.mouseX 

if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {

  movingRect.shapeColor= "red";
  fixedRect.shapeColor= "red";

  movingRect.velocityX=movingRect.velocityX*(-1)
  fixedRect.velocityX=fixedRect.velocityX*(-1)

  movingRect.velocityY=movingRect.velocityY*(-1)
  fixedRect.velocityY=fixedRect.velocityY*(-1)

}
else {

  movingRect.shapeColor= "green";
  fixedRect.shapeColor= "green";

}

  drawSprites();
}