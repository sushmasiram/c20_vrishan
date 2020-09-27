var mrect, frect;
var mrect1;
function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 150, 50);
  mrect1 = createSprite(400, 200, 150, 50);
  frect = createSprite(200, 200, 100, 50);
  mrect1.velocityX = -1;
  mrect1.velocityY = 0;
}

function draw() {
  background("lightgreen"); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  if (Math.abs(mrect.x - frect.x) < mrect.width/2 + frect.width/2
    && Math.abs(mrect.y - frect.y) < mrect.height/2 + mrect.height/2 ){
      frect.shapeColor = "blue"
       
  } else{
    frect.shapeColor = "grey"
  }

  if (Math.abs(mrect1.x - frect.x) < mrect1.width/2 + frect.width/2
  && Math.abs(mrect1.y - frect.y) < mrect1.height/2 + frect.height/2 ){
    console.log("entering condition")
    mrect1.velocityX = mrect1.velocityX * -1
    frect.velocityX =  frect.velocityX * -1

    mrect1.velocityY = mrect1.velocityY * -1
    frect.velocityY =  frect.velocityY * -1
     
} 

  
  drawSprites();
}