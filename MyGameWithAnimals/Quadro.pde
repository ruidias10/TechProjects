class Quadro {
  int x1,x2,y1,y2;
  int ini_x1,ini_x2,ini_y1,ini_y2;
  
  Quadro (int x1,int y1,int x2,int y2)
  {
    this.x1 = ini_x1=x1;
    this.y1 = ini_y1=y1;
    this.x2 = ini_x2=x2;
    this.y2 = ini_y2=y2;
  }
  
  boolean over(int x,int y)
  {
    return (x>=x1 && x<=x2 && y>=y1 && y<=y2);
  }
  
  void back_to_panel()
  {
    x1 = ini_x1;
    y1 = ini_y1;
    x2 = ini_x2;
    y2 = ini_y2;
  }
}

