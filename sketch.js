var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(400, 200, 30, 30);
  car.velocityX=speed;
  wall = createSprite(1200,200,30,100);
}

function draw() {
  background(0);  
  if (wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0;
    deformation=0.5*speed*speed*weight/22500;
    if (deformation<100){
      car.shapeColor="green";
    }
    if (deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    if (deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}