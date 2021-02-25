var road,roadImage;
var car,carImage;

function preload(){
  roadImage=loadImage('track.png');
  carImage=loadImage('Car1.jpg');
}

function setup(){
 createCanvas(600,600);

 road=createSprite(300,300);
 road.addImage(roadImage);
 road.scale=1;

 car=createSprite(300,500);
 car.addImage(carImage);
}

function draw(){
  road.velocityY=2;
  if(road.y>400){
    road.y=300;
  }
  //console.log(road.y);
 
  drawSprites();
}