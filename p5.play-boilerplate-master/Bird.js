class Bird{
      constructor(x,y){
      this.body=Bodies.rectangle(x,y,50,50)
      this.width=50
      this.height=50
      World.add(myworld,this.body)

      }
      display(){
          var pos=this.body.position
          push()
          pos.x=mouseX
          pos.y=mouseY
          var angle= this.body.angle
          translate(pos.x,pos.y)
          rotate(angle)
          stroke("red")
          strokeWeight(2)
          fill("orange")
          rect(0,0,this.width,this.height)
          pop()
        
      }
}