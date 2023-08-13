class Level_3 extends Game {

  
  // Construtor da Class
  //================================================================= 
  Level_3()
  {
    this.descriptionLevel = "Entremédio - Apresenta parabéns ao jogador.";
  }
  //=================================================================
  

  // Desenha o nivel
  //=================================================================   
  int drawLevel()
  {
    this.configBackgroundImage("Level_03.jpg");  
    
    this.showRatingMiddle();
    return 0;
  }
}
