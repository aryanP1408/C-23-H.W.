// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var world,engine;
var ground,tanker,ball1,ball2,ball3,ball4,cannonBall;

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
     createCanvas(400,400);
    engine = Matter.Engine.create();
    world =engine.world;
    Matter.Engine.update(engine);
    ground = new Ground(200,390,600,10);
    tanker =  new Tanker(50,380,50,50);
    cannonBall = new CanonBall(200,200);
    ball1 = new Ball(30,30,20);
    ball2 = new Ball(70,70,20);
    ball3 = new Ball(80,40,20);
    ball4 = new Ball(50,80,20);
    Matter.Engine.run(engine);


   

    
}
background(0);
function draw() {
    Matter.Engine.run(engine);
    background(0);
// Remember to update the Matter Engine and set the background.
ground.display();
tanker.display();
cannonBall.display();




}


function keyReleased() {
  
}