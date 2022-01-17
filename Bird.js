class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage= loadImage("sprites/smoke.png");
    this.tragectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>8 ){
      var position = [this.body.position.x,this.body.position.y];
      this.tragectory.push(position);
    }
   

    for(var i =0; i<this.tragectory.length; i++){
      image(this.smokeImage, this.tragectory[i][0],this.tragectory[i][1])
    }
  }
}
