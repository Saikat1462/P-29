class Polygon {
    constructor(x,y,radius) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        fill("white");
        circle(pos.x,pos.y,this.radius)
        push();
        translate(this.body.position.x, this.body.position.y);
    }
}