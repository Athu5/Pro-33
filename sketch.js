//const Bodies = Matter.Bodies;

var bg;
var web = [];
var myWorld,myEngine;
function preload(){

bg = loadImage("snow3.jpg");

}
function setup() {
  createCanvas(800,400);

  myEngine = Matter.Engine.create();
  myWorld = myEngine.world;

 //createSprite(400, 200, 50, 50);

 for(var i=0;i<=550 ; i++){
  web.push(new Snow(Math.round(random(50, 750)), Math.round(random(10, 50)), 25));
 }
 Matter.Engine.run(myEngine);
}

function draw() {

  background(bg);  

 for(var i=0;i<=550 ; i++){
  web[i].display();
}

  //web.display();
}
