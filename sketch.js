var bullet ;

var wall ;

var car;

var speed , weight ;

var thickness;





function setup() {

  createCanvas(1600,400);
  
 
 
 
  speed = random (55,90);
  weight = random (400,1500);
  thickness = random (20,25);

  car = createSprite (50,200,50,20);

  wall = createSprite (1200,200,thickness,height);
 
  
  bulletweight = 30 - 52;
  bulletspeed = 223 - 321;


 
  
  


  car.velocityX = speed/5;
 

   
  


  if(deformation < 100){

    car.velocityX-0;
  
    var deformation = 0.5 * weight * speed * speed/2;
    if(deformation<100)
  
  {
  
    car.shapeColor = color (0,225,0);

    car.velocityX = 0;

  
  }
  }
}




function draw() {


  background(0);  


  car.collide(wall);

  if(wall.x - car.x  < car.width/2 * wall.width/2){

    car.velocityX-0;
  
    var deformation = 0.5 * weight * speed * speed/2;
    if(deformation<180)
  
  {
  
    car.shapeColor = color (255,0,0);

    car.velocityX = 0;

  
  }
     
}

  if(deformation < 180 && deformation > 100){

    car.velocityX -0;
  
    
  
  {
  
    car.shapeColor = color (230,230,0);

    car.velocityX = 0;

  
  }
  }


  if(deformation < 100){

    car.velocityX-0;
  
    
  
  {
  
    car.shapeColor = color (0,225,0);

    car.velocityX-0;

  
  }
  }
    
  
    
  if (hasCollided (bullet , wall)) {


    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness );
  }

     if (damage > 10 ){

      wall.shapeColor = color (255,0,0);

     }

    
     if (damage > 10 ){

      wall.shapeColor = color (0,255,0);

     }



  drawSprites();
}


function hasCollided (bullet , wall) {


  bullet = bullet.velocityX + bullet.width;
  wall = wall.velocityX ;

  if (bullet >+ wall) {

    return true;
  }

  return false;

}