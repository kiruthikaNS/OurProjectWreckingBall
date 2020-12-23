class Box{
constructor(x,y,width,height){
var options = {

    'restitution ' :0.5,
    'friction': 1,
    'density' : 0.02

}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(myWorld, this.body);

}

display(){

    var pos = this.body.position;

    var angle = this.body.angle;
    push ()
    rotate(angle);
    translate(pos.x,pos.y);
    rectMode(CENTER)
    stroke ("white")
    fill("red");
    rect(0,0,this.width,this.height);
    pop ();

}


}