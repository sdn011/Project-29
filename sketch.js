const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 50)
    stand = new Ground(600, 350, 150, 50)
    block1 = new Block(450, 400, 50, 50)
    block2 = new Block(475, 400, 50, 50)
    block3 = new Block(500, 400, 50, 50)
    block4 = new Block(525, 400, 50, 50)
    block5 = new Block(462, 425, 50, 50)
    block6 = new Block(487, 425, 50, 50)
    block7 = new Block(512, 425, 50, 50)
    block8 = new Block(475, 450, 50, 50)
    block9 = new Block(500, 450, 50, 50)
    block10 = new Block(462, 475, 50, 50)
}

function draw(){
    slingshot.display(); 
    block1.display()  
    block2.display()   
    block3.display()   
    block4.display()   
    block5.display()   
    block6.display()   
    block7.display()   
    block8.display()   
    block9.display()   
    block10.display()
    ground.display()
    stand.display()    

    strokeWeight(30)
    stroke("red")
    Text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 600, 200)
}