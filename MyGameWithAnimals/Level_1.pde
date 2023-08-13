class Level_1 extends Game {

  
  // Construtor da Class
  //================================================================= 
  Level_1() 
  { 
    this.descriptionLevel = "Inicio do jogo - Apresenta o menu para iniciar.";
  }
  //=================================================================
  

  // Desenha o nivel
  //=================================================================   
  int drawLevel()
  {
    this.configBackgroundImage("Home.jpg");  
    return 0;
  }
}
