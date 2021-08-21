const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies  
var myengine,myworld
var bird
var ground
var box1
function setup(){
canvas=createCanvas(1200,400)
myengine=Engine.create()
myworld= myengine.world
bird=new Bird(200,200)
ground=new Ground(600,380,1200,50)
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
pig1=new Pig(810,350,50,50)
pig2=new Pig(810,220,50,50)
log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
}



function draw(){
background("yellow")
Engine.update(myengine)
bird.display()
ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
pig1.display()
pig2.display()
log1.display()
log2.display()
log3.display()
log4.display()
}
