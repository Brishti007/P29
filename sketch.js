const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , box;

function setup(){

var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,233,200,170);

//base
box1 = new Box(330,235,30,40);
box2 = new Box(360,235,30,40);
box3 = new Box(390,235,30,40);
box4 = new Box(420,235,30,40);
box5 = new Box(450,235,30,40);

//L2
box6 = new Box(360,195,30,40);
box7 = new Box(390,195,30,40);
box8 = new Box(420,195,30,40);

//top
box9 = new Box(390,155,30,40);

}

function draw(){
background("brown");
Engine.update(engine);
text("Drag & Release the stone to lauch it." , 250 , 150);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

ground.display();
}


