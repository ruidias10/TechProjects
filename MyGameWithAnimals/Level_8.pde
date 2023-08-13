class Level_8 extends Game {

  
  // Construtor da Class
  //================================================================= 
  Level_8()
  {
     this.descriptionLevel = "Fim do jogo - Falha apresenta o menu para iniciar.";
  }
  //=================================================================
  

  // Desenha o nivel
  //=================================================================     
  int drawLevel()
  {
    this.configBackgroundImage("Level_missed.jpg");  
    return 0;
  }
}
