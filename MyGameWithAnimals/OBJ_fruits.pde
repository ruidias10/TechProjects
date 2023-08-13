class OBJ_fruits {
  
  int x1, y1;
  PImage image;
  boolean visible = true;
  
  // Construtor da Class
  //================================================================= 
  OBJ_fruits (int x,int y)
  {
    this.x1 = x;
    this.y1 = y;
    
    int tmp = (int)random(0, 7);
    String img = "fruits_" + tmp + ".png";
    
    this.image = loadImage(img);
  }

  boolean getVisible()
  {
    return this.visible;
  }
  
  void redowOvos()
  {
    //rect(this.x1, this.y1, 33, 33);
    if (visible)
      image(this.image, this.x1, this.y1);  
  }
  
  void isColision(int x, int y)
  {
    //rect(this.x1, this.y1, 33, 33);
    
    //int t = this.y1-20;
    //int m = this.y1+20;
    //println("Y " + y +" >= " + t );
    //println("Y " + y +" < " + m );
    //println("Y " + y);
    
    //if ((x+30 >= this.x1 && x-30 < this.x1) &&(y-30 >= this.y1 &&  y+30 < this.y1 ))
     if ((x >= this.x1-20 && x < this.x1+20) &&(y >= this.y1-20 &&  y <this.y1+20 ))
    {
      //println("Colisaoooo");
      if (visible)
      {
        Rating = Rating+30;
        this.image = loadImage("fruits_explode.png");
        image(this.image, this.x1, this.y1); 
        visible = false;  
        
        playerAction = minim.loadFile("actionSond.mp3");
        playerAction.play();        
      }      
    }
  }
}
