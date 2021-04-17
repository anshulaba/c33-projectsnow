function preload()
{
  bgimg=loadImage("snow2.jpg");
  snowimg=loadImage("snow4.webp");
}


function setup() {
  createCanvas(800,800);
  bg=createSprite(200,200,50,50);
  bg.addAnimation("running",bgimg);
  
  snow=createSprite(300,0,100,100);
  snow.addAnimation("running",snowimg);
  snow.scale=0.05;

}

function draw() {
  background("bg");  
  snow.velocityY=2;

  if (snow.y>400) {
  snow.y=snow.height/2;
  }   
  drawSprites();
}















