class Paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':1.2,
		'friction': 0,
		'restitution':0.3
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
		this.image=loadImage("paper.png")
		

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x,paperpos.y);
			rectMode(CENTER)

			
			imageMode(CENTER)
			image(this.image,0, 0, this.width, this.height);
			
		
	    	ellipse(0,0,this.r,this.r);
			pop()

	}

}

