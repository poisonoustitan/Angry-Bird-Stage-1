class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
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