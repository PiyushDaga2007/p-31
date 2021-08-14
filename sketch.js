var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var y=0;
function setup() {
  createCanvas(820, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var i=75;i<=375;i+=100){
    y++;
    if(y%2==0)
    var j=50;
    else
    var j=75 
    for(;j<=width;j+=50){
      plinkos.push(new Plinko(j,i));
    }
  }
  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  //for (var j = 75; j <=width; j=j+50) { 
  //  plinkos.push(new Plinko(j,75));}

  //create 2nd row of plinko objects
  //for (var j = 50; j <=width-10; j=j+50) 
    //plinkos.push(new Plinko(j,175));
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
if(frameCount%60===0){
  particles.push(new Particles(random(0,800),0));
 }
  //display the particles 
  for (var k=0;k<particles.length;k++){
    particles[k].display();
  }


}