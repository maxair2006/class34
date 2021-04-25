const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
    craneImage=loadImage("crane.png");
    bg=loadImage("city.png");
}
function setup(){
    createCanvas(1000,600);
    engine=Engine.create()
    world=engine.world
    ground=new Ground(500,590,1000,10)
    t1=new Tower(350,575,30,40);
    t2=new Tower(380,575,30,40);
    t3=new Tower(410,575,30,40);
    t4=new Tower(440,575,30,40);
    t5=new Tower(350,535,30,40);
    t6=new Tower(380,535,30,40);
    t7=new Tower(410,535,30,40);
    t8=new Tower(440,535,30,40);
    t9=new Tower(350,495,30,40);
    t10=new Tower(380,495,30,40);
    t11=new Tower(410,495,30,40);
    t12=new Tower(440,495,30,40);
    ball = new Ball(185,400,40);
    s=new Slingshot(ball.body,{x:185,y:400})

}
function draw(){
    Engine.update(engine)
    background(bg);
    imageMode(CENTER);
    image (craneImage,100,400,200,500)
    ground.display();
    t1.display()
    t2.display()
    t3.display()
    t4.display()
    t5.display()
    t6.display()
    t7.display()
    t8.display()
    t9.display()
    t10.display()
    t11.display()
    t12.display()
    ball.display()
    s.display()
    
}
function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


