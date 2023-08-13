class Window {

  Game[] _Game_ = new Game[9];
  int Wwidth, Wheight, _Game_Level_;

  /*Construtor da Class*/
  Window()
  {
    
    this.Wwidth = 1280;
    this.Wheight = 800;
    
    this._Game_Level_ = 3;
    
    this.changeLevel(); /*INICIA OS NIVEIS*/
    this.configWindow();
    //
  }
  //=================================================================
  

  // Inicia o display da janela
  //================================================================= 
  void configWindow() 
  {
    size(this.Wwidth, this.Wheight);
  }
  //=================================================================
  


  void ChangeMovimentPinguin(int x, int y)
  {
     _Game_[_Game_Level_].movePinguin(x, y);
     
  }

  

  // Get e Set do nivel do Jogo
  //================================================================= 
  int get_Game_Level_() 
  {
    return this._Game_Level_;
  }
  
  Game get_Game_()
  {
    return _Game_[_Game_Level_];
  }
  
  void set_Game_Level_() 
  { 
    this._Game_Level_++; 
    this.changeLevel(); 
  }   
  
  void set_Restart_Game_() 
  { 
    this._Game_Level_ = 1;
  }    
  //=================================================================
  
  void drawGame()
  {
    if (_Game_[_Game_Level_].drawLevel() == 2 ){
      this.set_Game_Level_();
    }
    else if (_Game_[_Game_Level_].drawLevel() == 1 ){
      this._Game_Level_ = 7;
      this.set_Game_Level_();
    }    
  }

  // Get e Set do nivel do Jogo
  //================================================================= 
  void changeLevel()
  {
    if (_Game_Level_ == 1) //BOAS VINDAS
    {
      _Game_[_Game_Level_] = new Level_1();
    }
    //puzle
    else if(_Game_Level_ == 2)
    {
      _Game_[_Game_Level_] = new Level_2();
    }
    //centro
    else if(_Game_Level_ == 3) //NIVEL 2 DO JOGO
    {
      _Game_[_Game_Level_] = new Level_3();
    }
    else if(_Game_Level_ == 4) //NIVEL 3 DO JOGO
    {
      _Game_[_Game_Level_] = new Level_4();
    }
    else if(_Game_Level_ == 5) //NIVEL 4 DO JOGO
    {
      _Game_[_Game_Level_] = new Level_5();
    }
    else if(_Game_Level_ == 6) //NIVEL 4 DO JOGO
    {
      _Game_[_Game_Level_] = new Level_6();
    }
    
    else if(_Game_Level_ == 7) //INICIA NOAVEMNETE O JOGO
    {
      _Game_[_Game_Level_] = new Level_7();
    } 
    
    else if(_Game_Level_ == 8) //INICIA NOAVEMNETE O JOGO
    {
      _Game_[_Game_Level_] = new Level_8();
    }     
  }
  
  
}






