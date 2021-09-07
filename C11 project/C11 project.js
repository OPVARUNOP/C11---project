var ship , ship1;
var sea1;
function preload(){
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea1 = loadAnimation("sea.png")
}

function setup(){
  createCanvas(600,500);
  
   //creating the sea
   sea1 = createSprite(600,500);
   sea1.addAnimation("running", sea1);
   sea1.scale = 0.5;
   sea1.velocityX = -1;
   
   //creating the ship
   ship = createSprite(50,200,20,50);
   ship.addAnimation("running",ship1);
   edges = createEdgeSprites();

   //adding scale and position to ship
   ship.scale = 0.25;
   ship.x = 90;
   ship.y = 300;

}

function draw() {
  background("blue");
 if (keydown("enter")){
   ship.velocityX = 5;
 }
 if (keydown("left")){
   ship.velocityX = -5;
  }
 if (keydown("space")){
   ship.velocityX = 0;
 }
 if (sea.x < 0){
     sea.x = sea.width/2;
 }
 //stop ship from falling down
   ship.collide(edges[3])
 drawSprites();
}