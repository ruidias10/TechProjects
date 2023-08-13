class Level_4 extends Game {

  boolean complesto = false;
  int dsafioImg_;
  String direccao="Frente";
  String direccao_y="Subir";
  int moverpara_x, moverpara_y, img_ping, velocidade;
  
  PImage images[], desafio, barreira;
  int ping_x, ping_y;
  
  /*Construtor da Class*/
  Level_4()
  {  
     this.timeLevel = 100000;
     this.descriptionLevel = "2 nível jogável - Apresenta a aventura do pinguim";
     
     
     this.dsafioImg_ = 532;
     this.velocidade = 20;
     this.img_ping = 0;
     this.ping_x = 0;
     this.ping_y = 600;
     this.moverpara_y = this.ping_y;
     this.images = new PImage[8];
       
     /*Anda para a frente*/
     this.images[0] = loadImage("pin_0.png");
     this.images[1] = loadImage("pin_1.png");
     this.images[2] = loadImage("pin_2.png");
     
     /*Anda para tras*/
     this.images[3] = loadImage("pin_3.png");
     this.images[4] = loadImage("pin_4.png");
     this.images[5] = loadImage("pin_5.png");     
     
     this.desafio = loadImage("desafio.png");
     this.barreira = loadImage("barreira.png");
     
     timer = new Timer(this.timeLevel);
  }
  //=================================================================

  
  void movePinguin(int x, int y)
  {
    if (this.complesto != true)
    {
      if (x> 730)
        x = 730;
    }

    this.moverpara_x = x;
    this.moverpara_y = y;
  }


  void actionmovePinguin()
  {
    if (this.moverpara_x > this.ping_x)
    {
      this.direccao = "Frente";
      this.ping_x = this.ping_x +this.velocidade;
      
      if(this.ping_x > this.moverpara_x)
        this.ping_x = this.moverpara_x;
      
      
      if (this.img_ping == 0)
      {
        this.img_ping = 1;
      }
     if (this.img_ping == 1)
     {
        this.img_ping = 2;
      }
      else {
        this.img_ping = 0;
      }    
    }
    else if (this.moverpara_x < this.ping_x)
    {
      this.direccao = "Tras";
      this.ping_x = this.ping_x - this.velocidade;
      
      if(this.ping_x < this.moverpara_x)
        this.ping_x = this.moverpara_x;      
      
      if (this.img_ping == 3)
      {
        this.img_ping = 4;
      }
     if (this.img_ping == 4)
     {
        this.img_ping = 5;
      }
      else {
        this.img_ping = 3;
      } 
    }
    
     else
     {
      if(this.direccao == "Frente")
      {
        this.img_ping = 0;
      }
      else if(this.direccao == "Tras")
      {
        this.img_ping = 3;
      }
     }
  }


  void actionJumpPinguin()
  {
    if (this.moverpara_y < 600)
    {
      
      //this.direccao_y == "Subir";
      
      
      this.ping_y = this.ping_y - this.velocidade;
      
      if(this.ping_y < this.moverpara_y)
        this.ping_y = this.moverpara_y;
  
      if (this.ping_y == this.moverpara_y) 
     {
       this.ping_y = this.ping_y + this.velocidade;
       
      if(this.ping_y > this.moverpara_y)
      {
        this.ping_y = 600;
        this.moverpara_y = 600;   
      }
       
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
      if (this.complesto == true)
      {
        if (this.ping_x> 730)
        {
          this.drawFadeOut();
          this.timeOutFadeOut--;
          
          if (this.timeOutFadeOut <= 0)
            return 2;
          else
            return 0;
        }
      }
      
        
      this.configBackgroundImage("Level_2.jpg");    
      image(this.images[img_ping], this.ping_x, this.ping_y);
      image(this.desafio, 362, this.dsafioImg_);
      
      
      if (this.complesto != true)
        image(this.barreira, 772, 635);
      else{
        if ( this.ping_x > 772)
        {
          println("Terminsta o nivel");
        }
        
      }
  
  
  
  
      this.actionmovePinguin();
      this.actionJumpPinguin();
  
  
  
      this.showRating();  
      
      
      //rect(362, 532, 30, 30);
      //rect(this.ping_x, this.ping_y, 38, 64);
      
      /*Colisao*/
      if ((this.ping_x+30 >= 362 && this.ping_x < 392) &&(this.ping_y > 502 &&  this.ping_y < 572 ))
      {
        //println("Colisaoooo");
        playerAction = minim.loadFile("actionSond.mp3");
        playerAction.play();
        this.dsafioImg_ = 522;
        
        if(this.complesto == false)
        {
          Rating = Rating+20;
          this.complesto = true;
  
         this.desafio = loadImage("desafioFeito.png");        
        }
        
      }
      else{
        println("NAO Colisaoooo");
        this.dsafioImg_ = 532;
      }
      
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

