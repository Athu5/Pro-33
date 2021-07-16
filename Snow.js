class Snow{
  constructor(x,y,r){

    var options={
  'restitution':0.5,
  'frictionAir':0.5,
  'density':0.5
      
  }

 this.r=r;

  this.snow = Matter.Bodies.circle(x, y, r, options);
  Matter.World.add(myWorld, this.snow);
  this.image = loadImage("snow5.webp");
  

  }

 display(){
  
     push();

     imageMode(CENTER);
     image(this.image, this.snow.position.x, this.snow.position.y, this.r, this.r);

     pop();

   }
  }
