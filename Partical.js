class Partical
{
    constructor(x,y,r)
    {
        var option={
            restitution=0.4
        }
        this.r=r
        this.body=Bodies.rectangle(x,y,this.r,option)
        this.color = color(random(0,225),ramdom(0,225),random(0,225))
        World.add(world,this.body)
     
     display()
     {
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
       
        pop()
     }
     
    }
}