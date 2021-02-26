const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas=createCanvas(2000,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(500,400,250,10)
  ground2 =new Ground(900,300,190,10)

  box1=new Box(500,380,30,30)
  box2=new Box(470,380,30,30)
  box3=new Box(440,380,30,30)
  box4=new Box(410,380,30,30)
  box5=new Box(530,380,30,30)
  box6=new Box(560,380,30,30)
  box7=new Box(590,380,30,30)
  box8=new Box(440,350,30,30)
  box9=new Box(470,350,30,30)
  box10=new Box(500,350,30,30)
  box11=new Box(530,350,30,30)
  box12=new Box(560,350,30,30)
  box13=new Box(530,320,30,30)
  box14=new Box(500,320,30,30)
  box15=new Box(470,320,30,30)
  box16=new Box(500,290,30,30)
  box17=new Box(900,280,30,30)
  box18=new Box(930,280,30,30)
  box19=new Box(960,280,30,30)
  box20=new Box(870,280,30,30)
  box21=new Box(840,280,30,30)
  box22=new Box(900,250,30,30)
  box23=new Box(870,250,30,30)
  box24=new Box(930,250,30,30)
  box25=new Box(900,220,30,30)
  polygon=new Polygon(80,90,40)
  launcher = new Launcher(polygon.body,{x:200, y:300})

}

function draw() {
  background(255,255,255);  
  ground.display()
  ground1.display()
  ground2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  polygon.display()
  launcher.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly()
}