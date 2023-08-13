class Level_2 extends Game {

  boolean config_inicial;
  PImage backgroundImage, images[][], source;
  int grid_x, grid_y, pos_x, pos_y, dragged_item, largura, altura, finalNivel, matrix, difficulty, gx1,gy1,gx2,gy2;
 
  Quadro pecasPuzzle[];
  
  
  // Construtor da Class
  //================================================================= 
  Level_2()
  {
    this.timeLevel = 100000;  
    this.descriptionLevel = "1 nível jogável - Apresenta o puzzle";

    this.grid_x = 62;   
    this.grid_y =215;
    this.pos_x = 32; 
    this.pos_y = 590;
    this.config_inicial = true;
    this.dragged_item = -1;
    this.difficulty=4;
    
    this.matrix=difficulty*difficulty;

    source = loadImage("puzzle.jpg");
    this.largura = source.width/difficulty;
    this.altura = source.height/difficulty;
  
    this.images = new PImage[difficulty][difficulty];
    this.pecasPuzzle = new Quadro[this.matrix];
    
    // Split image into small images
    gx1=0;gy1=0;gx2=largura;gy2=altura;
    for(int i=0; i<difficulty; i++)
      for(int j=0; j<difficulty; j++)
            images[j][i] = source.get(gx1+(i*largura), gy1+(j*altura), largura, altura); 
  

    this.finalNivel = this.matrix+1;

    timer = new Timer(this.timeLevel);
  }
  //=================================================================
  

  // Desenha o nivel
  //=================================================================   
  int drawLevel()
  {
    // Prapara o fim do jogo por ter perdido, tempo acabou
    if(timer.isFinished())
    {
      this.drawFadeOut();
      this.timeOutFadeOut--;
      
      if (this.timeOutFadeOut <= 0)
        return 1;
    }
    // Continua a jogar
    else
    {   
      // Fim do nivel com sucesso
      if (this.finalNivel == 1)
      {
        this.drawFadeOut();
        this.timeOutFadeOut--;
        
        if (this.timeOutFadeOut <= 0)
          return 2;
        else
          return 0;
      }    

      // Jogo propriamente dito
      this.configBackgroundImage("Level_1.jpg");  

      this.showRating();
         
      int x=pos_x,y=pos_y;
      
      //load images on panel
      if(config_inicial)
      {
        config_inicial = false;
        for(int i=0;i<matrix;i++){
          pecasPuzzle[i] = new Quadro(x,y,x+largura,y+altura);
          
          if((i+1)%8==0){
            x = pos_x;
            y +=(altura+2);
          }
          else
            x +=(largura+2);   
        }
      }
    
      // Constroi a grelha
      gx1=grid_x;gy1=grid_y;gx2=largura;gy2=altura;
      for(int i=0; i<difficulty; i++)
        for(int j=0; j<difficulty; j++)
              {
                stroke(81, 39, 21);
                rect(gx1+(i*largura), gy1+(j*altura), largura, altura);
              } 
     
    
     
      for(int i=0; i<matrix; i++)
        image(images[i/difficulty][i%difficulty], pecasPuzzle[i].x1,pecasPuzzle[i].y1);   
      
      this.drawBarTime(this.timeLevel, timer.getTimeNow());

    } 
    return 0;
  }
  //=================================================================
  

  // Controla acções das peças
  //================================================================= 
  void GmouseDragged()
  {
    if (this.matrix > 0)
     {
        for(int i=0; i<this.matrix; i++){
          if(this.dragged_item==i || (this.dragged_item==-1 && this.pecasPuzzle[i].over(mouseX,mouseY) )){
  
          this.dragged_item = i;
          this.pecasPuzzle[i].x1 = mouseX-(this.largura/2);
          this.pecasPuzzle[i].y1 = mouseY-(this.altura/2);
          this.pecasPuzzle[i].x2 = mouseX+(this.largura/2);
          this.pecasPuzzle[i].y2 = mouseY+(this.altura/2);
        
          break;
        }
      }
    }
  }
  //=================================================================
  

  // Controla acções das peças
  //================================================================= 
  void GmouseReleased()
  {
    int minx,miny,maxx,maxy;
    
    if(this.dragged_item!=-1)
    {
      minx = this.grid_x+this.largura*(this.dragged_item%this.difficulty);
      maxx = minx+this.largura;
  
      miny = this.grid_y+this.altura*(this.dragged_item/this.difficulty);
      maxy = miny+this.altura;
  
      if(mouseX>=minx && mouseX<=maxx && mouseY>=miny && mouseY<=maxy)
      {
        for(int i=0; i<this.matrix; i++)
         {
           if ((this.pecasPuzzle[i].x1 != minx) && (this.pecasPuzzle[i].x2 != maxx) && (this.pecasPuzzle[i].y1 == miny) && (this.pecasPuzzle[i].y2 == maxy))
           {
             playerAction = minim.loadFile("actionSond.mp3");
             playerAction.play();
             //this.finalNivel--;
           }
        }
          
        Rating = Rating+5;
        
        this.pecasPuzzle[dragged_item].x1 = minx;
        this.pecasPuzzle[dragged_item].x2 = maxx;
        this.pecasPuzzle[dragged_item].y1 = miny;
        this.pecasPuzzle[dragged_item].y2 = maxy;
      }
  
      this.dragged_item = -1;
      this.finalNivel--;
      println(this.finalNivel + " ---- " + this.dragged_item);
    }
  } 
}
