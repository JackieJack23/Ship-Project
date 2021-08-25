var seaImage;
var shipAnim;

function preload(){
  shipAnim = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImage = loadImage("sea.png")

  
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200, 400, 400)
  ship = createSprite(165, 230, 20, 20)

  sea.addAnimation("sea", seaImage)
  ship.addAnimation("ship", shipAnim)

  sea.scale = 0.25;
  ship.scale = 0.2;

  sea.velocityX = 2
}

function draw() {
  background("blue");
  if (sea.x > 400) 
  {
    sea.x = sea.width/10000;
  }
  console.log(sea.x)
  //console.log(sea.width)
  drawSprites()
}