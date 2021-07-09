class Sand {
	constructor(x,y,r){

		var options={
			'restitution':1.3,
			'friction':5,
			'density':1,
}
this.x=x;
this.y=y;
this.r=r;
this.body= Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);

	}

	display(){

		var pos=this.body.position;
		var angle=this.body.angle;
		push();
		translate(pos.x,pos.y);
		rotate(angle);
		fill("brown");
		strokeWeight(4);
		stroke("black");
		ellipse(0,0,this.width,this.height);
		pop();
	}
}

