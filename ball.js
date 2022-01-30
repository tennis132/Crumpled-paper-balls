class Ball
{
    constructor(a,b,c)
    {
        this.x = a
        this.y = b
        this.r = c

        var options = 
        {
            friction: 0,
            isStatic: false,
            restituion: 0.75,
        }

        this.body = Bodies.circle(a,b,c,options)

        World.add(world,this.body)
    }

    display()
    {
        var pos = this.body.position

        push()
        fill("white")
        ellipse(pos.x, pos.y, this.r)
        pop()
    }
}