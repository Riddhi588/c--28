class Launcher 
{
    constructor (body1,point)
    {
        var option = {bodyA:body1, bodyB:point, stiffness:0.04, length:10}
        this.launcher = Matter.Constraint.create(option);
        World.add(world,this.launcher);
    }

    display()
    {
        if(this.launcher.bodyA!== null ) {
        stroke("black");
        strokeWeight(4);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.launcher.pointB.x,this.launcher.pointB.y)
        }
    }

    
    fly()
    {
        this.launcher.bodyA = null;
    }
}