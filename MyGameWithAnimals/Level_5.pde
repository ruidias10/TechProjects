class Level_5 extends Game {

  
  // Construtor da Class
  //================================================================= 
  Level_5()
  {
    this.descriptionLevel = "Entremédio - Apresenta parabéns ao jogador.";
  }
  //=================================================================
  

  // Desenha o nivel
  //=================================================================    
  int drawLevel()
  {
    this.configBackgroundImage("Level_05.jpg");  
    
    this.showRatingMiddle();
    return 0;
  }
}
