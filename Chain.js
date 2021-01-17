class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.1,
            lenght:10,
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        line (posA.x,posA.y,posB.x,posB.y);
    }
}