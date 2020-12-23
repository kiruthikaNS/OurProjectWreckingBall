const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22;

var ball, rope;

function setup(){
    var canvas = createCanvas(1000,1000);
   myEngine = Engine.create();
    myWorld = myEngine.world;


    //making ground
    ground = new Ground(300,700,1200,20);

    //making boxes

    box1 = new Box(600,100,70,70);
    box2 = new Box(600,100,70,70);
    box3 = new Box(600,100,70,70);
    box4 = new Box(600,100,70,70);
    box5 = new Box(600,100,70,70);
    box6 = new Box(500,100,70,70);
    box7 = new Box(500,100,70,70);
    box8 = new Box(500,100,70,70);
    box9 = new Box(500,100,70,70);
    box10 = new Box(500,100,70,70);
    box11 = new Box(500,100,70,70);
    box12= new Box(500,100,70,70);
    box13 = new Box(400,100,70,70);
    box14= new Box(400,100,70,70);
    box15 = new Box(400,100,70,70);
    box16= new Box(400,100,70,70);
    box17= new Box(400,100,70,70);
    box18= new Box(400,100,70,70);
    box19= new Box(400,100,70,70);
    box20 = new Box(400,100,70,70);
    box21 = new Box(400,100,70,70);
    box22 = new Box(400,100,70,70);


    ball = new Ball(200, 200, 80, 80);
    rope = new Rope(ball.body, { x: 200, y: 50 });
 

    
}

function draw(){
    background("darkblue");
    textSize(25);
    text ("Wrecking Ball",100,100);
    text("Done by," ,750,90);
    text("1.kiruthika",800,120);
    text("2.Saloni Jain",800,150);
    text("3.Tabitha",800,180);
    Engine.update(myEngine);

    //displaying the groubd
    ground.display();

    //displaying boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

     ball.display();
     rope.display();
   
}
function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
  