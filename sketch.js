var ship,shipsailing
var sea,seaimage
var edges

function preload(){
shipsailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimage =loadImage("sea.png");
}

function setup(){
  createCanvas(2000,2000);
 
  sea = createSprite(700,140,20000,10)
  sea.addImage("sea123",seaimage);
  sea.scale = 0.55;
  edges = createEdgeSprites();
  ship = createSprite(200,320,50,50)
  ship.addAnimation("sailing",shipsailing);
  ship.scale = 0.4;
  //ship.velocityY +=0.5

}

function draw() {
  background("white");
   
  //ship.collide(sea);

  if (sea.x < 10){
    sea.x = sea.width/10;  
  }
  sea.velocityX = -8;
  

  
  
  drawSprites();

}
 