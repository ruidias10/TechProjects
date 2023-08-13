class Level_7 extends Game {

  
  // Construtor da Class
  //================================================================= 
  Level_7()
  {
     this.descriptionLevel = "Fim do jogo - Sucesso apresenta o menu para iniciar.";
  }
  //=================================================================
  

  // Desenha o nivel
  //=================================================================     
  int drawLevel()
  {
    this.configBackgroundImage("Final.jpg"); 
    this.showRatingFinal(); 
    return 0;
  }
}
