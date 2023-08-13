class Level_6 extends Game {

  boolean complesto = false;
  int dsafioImg_, max_ovos, ovos, difficulty;
  String direccao="Frente";
  String direccao_y="Subir";
  int moverpara_x, moverpara_y, img_ping, velocidade;
  
  PImage images[];
  int ping_x, ping_y;
 

  OBJ_fruits[] fruits;
  
  /*Construtor da Class*/
  Level_6()
  {  
     this.timeLevel = 100000;
     this.descriptionLevel = "3 nível jogável - Apresenta a aventura do passaro do angry bird";
    
    
     this.ovos = 0;
     this.max_ovos = 5;
     this.dsafioImg_ = 532;
     this.velocidade = 20;
     this.img_ping = 0;
     this.ping_x = 0;
     this.ping_y = 600;
     this.moverpara_y = this.ping_y;
     this.images = new PImage[8];
     
     this.difficulty = 6;
     this.fruits = new OBJ_fruits[this.difficulty+2];

       
     /*Anda para a frente*/
     this.images[0] = loadImage("br_0.png");
     this.images[1] = loadImage("br_1.png");
     this.images[2] = loadImage("br_2.png");
     this.images[3] = loadImage("br_3.png");    
     
     /*Anda para tras*/
     this.images[4] = loadImage("br_4.png");
     this.images[5] = loadImage("br_5.png");   
     this.images[6] = loadImage("br_6.png");
     this.images[7] = loadImage("br_7.png");        
     
     
    for (int i=0; i<difficulty; i++)
      this.fruits[i] = new OBJ_fruits((int)random(725), (int)random(148, 565));
      
    
    timer = new Timer(this.timeLevel);
  }
  //=================================================================


  void sendOvos()
  {
    for (int i=0; i<this.difficulty; i++)
      this.fruits[i].redowOvos();
    
  }
  
  
  void movePinguin(int x, int y)
  {
    x = x-12;
    y = y-12;
    if (this.complesto != true)
    {
      if (x> 730)
        x = 730;
    }
    this.moverpara_x = x;
    this.moverpara_y = y;
  }


  void imgFrente()
  {
      if (this.img_ping == 0)
      {
        this.img_ping = 1;
      }
     else if (this.img_ping == 1)
     {
        this.img_ping = 2;
     }
     else if (this.img_ping == 2)
     {
        this.img_ping = 3;
     }     
      else {
        this.img_ping = 0;
      } 
  }

  void imgTras()
  {      
      if (this.img_ping == 4)
      {
        this.img_ping = 5;
      }
     else if (this.img_ping == 5)
     {
        this.img_ping = 6;
      }
     else if (this.img_ping == 6)
     {
        this.img_ping = 7;
      }      
      else {
        this.img_ping = 4;
      } 
  }


  void actionmovePinguin()
  {
    if (this.moverpara_x > this.ping_x)
    {
      this.direccao = "Frente";
      this.ping_x = this.ping_x +this.velocidade;
      
      if(this.ping_x > this.moverpara_x)
        this.ping_x = this.moverpara_x;      
    }
    
    
    else if (this.moverpara_x < this.ping_x)
    {
      this.direccao = "Tras";
      
      this.ping_x = this.ping_x - this.velocidade;
      
      if(this.ping_x < this.moverpara_x)
        this.ping_x = this.moverpara_x;           
    }

     
     
  }


  void actionJumpPinguin()
  {
    if (this.moverpara_y < 645)
    {
      //this.direccao_y == "Subir";

      //this.ping_y = this.ping_y - this.velocidade;
      
      if(this.ping_y < this.moverpara_y)
      {
        this.ping_y = this.ping_y + this.velocidade;
        //this.ping_y = this.moverpara_y;
      }
        
      if(this.ping_y > this.moverpara_y)
      {
        this.ping_y = this.ping_y - this.velocidade;
        //this.ping_y = this.moverpara_y; 
      }       
  
     if (this.ping_y == this.moverpara_y) 
     {
       this.ping_y = this.ping_y + this.velocidade;
       
      //if(this.ping_y > this.moverpara_y)
      //{
        //this.ping_y = 600;
        //this.moverpara_y = 600;
       //this.ping_y = this.ping_y + this.velocidade;   
      //}
       
     }     
    }
    
    
    
    
    //this.ping_y = this.moverpara_y;
  }







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
    
      
  
     if (this.complesto)
     {
        this.drawFadeOut();
        this.timeOutFadeOut--;
        
        if (this.timeOutFadeOut <= 0)
          return 2;
        else
          return 0;
     }
       
      
        
      this.configBackgroundImage("Level_3.jpg");    
      image(this.images[img_ping], this.ping_x, this.ping_y);
      
      
  
  
  
  
  
      this.actionmovePinguin();
      this.actionJumpPinguin();
      this.sendOvos();
      
  
  
  
  
    if(this.direccao == "Frente")
    {
      this.imgFrente();
    }
    else if(this.direccao == "Tras")
    {
      this.imgTras();
    }
  
  
  
      this.showRating();  
      
      
      //rect(362, 532, 30, 30);
      //rect(this.ping_x, this.ping_y, 38, 64);
      
      /*Colisao*/
      boolean tmpcomplesto = true;
      for (int i=0; i<this.difficulty; i++)
      {
        this.fruits[i].isColision((int)this.ping_x, (int)this.ping_y);
        //this.fruits[i].isColision((int)mouseX, (int)mouseY);
        
        if (this.fruits[i].getVisible()== true)
         { 
          tmpcomplesto = false;
         }
      }
      
      this.complesto = tmpcomplesto;
      
      if (this.complesto == true)
        return 2;
  
  
      this.drawBarTime(this.timeLevel, timer.getTimeNow());
    }
      return 0;
  }
  
  
  
  
void GmouseDragged()
{

 
}


void GmouseReleased()
{

  }
  

  
  
  
}

