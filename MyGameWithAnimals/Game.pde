class Game {

  Rating r = new Rating();
  
  Timer timer;
  PImage backgroundImage;
  String descriptionLevel;
  
  int timeLevel;
  int timeOutFadeOut = 100;


  // Construtor da Class
  //================================================================= 
  Game()
  {

  }
  //=================================================================
  

  // Inicia o display dos menus
  //================================================================= 
  void configBackgroundImage(String Img) 
  {
    this.backgroundImage = loadImage(Img);
    image(this.backgroundImage, 0, 0);
  }
  //=================================================================
  

  // Apresenta os pontos atuais do utilizador enquanto ele joga
  //================================================================= 
  void showRating()
  {
    fill(255);
    textSize(40);   
    text(Rating + " Pontos", 1000, 150);
  }
  //=================================================================
  

  // Apresenta os pontos atuais do utilizador enquanto ele joga
  //================================================================= 
  void showRatingMiddle()
  {
    fill(0);
    textSize(40);   
    text("Parabéns!!!", 262, 444);
    text("Já tens " + Rating + " Pontos", 212, 490);
  }
  //=================================================================
  

  // Apresenta os pontos finais do utilizador com um quadro de resultados
  //================================================================= 
  void showRatingFinal()
  {
    fill(0);
    textSize(40);   
    text("Conseguiste " + Rating + " Pontos", 160, 310);
    
    int tmp = 420;
    int[] _result = new int[4];
    
    r.setRating();
    _result = r.getRating();
    
    for (int i=0; i<4; i++)
    {
      text((i+1) + "º - " + _result[i] + " Pontos", 215, tmp);
      tmp = tmp +43;
    }
  }
  //=================================================================
  

  // Apresenta os pontos atuais do utilizador enquanto ele joga
  //================================================================= 
  void drawFadeOut()
  {
    fill(127, 127, 127, 5);
    rect(0, 0, 1280, 800);
  }
  //=================================================================
  

  // Desenha a barra do tempo a passar, recebe o tempo total 
  // para fazer o nivel e o tempo atual
  //================================================================= 
  void drawBarTime(int timeLevel, int timeNow)
  {
    int x = (timeNow * 144) / timeLevel;
    
    noStroke();
    fill(77, 180, 11);
    rect(x+144, 97, 165-x, 16);
  }
  //=================================================================
  

  // Outros métodos da class::Game
  //=================================================================   
  void GmouseDragged(){}
  void GmouseReleased(){} 
  void movePinguin(int x, int y){}
  int drawLevel(){ return 0; } 
}
