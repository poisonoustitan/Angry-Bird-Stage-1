class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,20,height,options)
        this.width=20
        this.height=height
        Matter.Body.setAngle(this.body,angle)
    World.add(myworld,this.body)
    }
  display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    rectMode(CENTER)
    translate(pos.x,pos.y)
    rotate(angle)
    fill("orange")
    rect(0,0,this.width,this.height)
    pop()  
}
} 