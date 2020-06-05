class Rat{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
            
        }
      
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
      

        World.add(world, this.body);
        
       
      }
 

     
      display(){
        var angle = this.body.angle;
        push();
        // translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
    
        rect(this.x, this.y ,this.width,this.height)
        pop();
      }
}