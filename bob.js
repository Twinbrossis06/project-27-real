class Paper{
    constructor(x,y,r){
        var g_options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
         
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,g_options);
        World.add(world,this.body);
        }

        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            fill("red");
            stroke("red");
            strokeWeight(2);
            ellipse(0,0,80,80);
            pop();
        }
	};