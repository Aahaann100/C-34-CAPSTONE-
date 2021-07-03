class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
		this.visibility=255

	}
	display()
	{

			if(this.body.speed >10){
				World.remove(world,this.body)
				push()
				this.visibility=this.visibility-5
      			tint(255,this.visibility)
				  image(this.image,this.body.position.x,this.body.position.y,this.r, this.r)
				  pop()
			}else{
				var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			}
			
			
			
	}
}
