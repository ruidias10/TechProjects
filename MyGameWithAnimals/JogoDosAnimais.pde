  import ddf.minim.*;
  
  Minim minim;
  AudioPlayer player;
  AudioPlayer playerAction;
  
  Game g;
  Window win;
  int Rating = 0;

  void setup() 
  {
    win = new Window();
    minim = new Minim(this);
    
    player = minim.loadFile("madagascar.mp3");
    player.play();
  }

  void draw()
  {
    win.drawGame();
    g = win.get_Game_();
  }



  void mouseClicked()
  {
    //Nivel de abertura
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 1))
    {
      Rating = 0;
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Game_Level_();
    }
    
    //Nivel intremedio
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 3))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Game_Level_();
    }
    
    //Para o nivel do pinguin
    //=======================================================================================================
    if ((mouseX >= 0 && mouseX <= 860) && (mouseY >= 520 && mouseY <= 650) && (win.get_Game_Level_() == 4))
    {
      win.ChangeMovimentPinguin(mouseX, mouseY);
    }  
  
    //Nivel intremedio
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 5))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Game_Level_();
    }

    //Para o nivel do passaro
    //=======================================================================================================
    if (win.get_Game_Level_() == 6)
    {
      win.ChangeMovimentPinguin(mouseX, mouseY);
    } 
  
    //Terminaste o jogo, dá possibilidade para retomar
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 7))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Restart_Game_();
    } 
  
    //Nivel de falha, dá possibilidade para retomar
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 8))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Restart_Game_();
    }     
  }
  
  
  //Para o Android
  void  mouseDragged()
  {
    //Nivel de abertura
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 1))
    {
      Rating = 0;
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Game_Level_();
    }
    
    //Nivel intremedio
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 3))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Game_Level_();
    }
    
    //Para o nivel do pinguin
    //=======================================================================================================
    if ((mouseX >= 0 && mouseX <= 860) && (mouseY >= 520 && mouseY <= 650) && (win.get_Game_Level_() == 4))
    {
      win.ChangeMovimentPinguin(mouseX, mouseY);
    }  
  
    //Nivel intremedio
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 5))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Game_Level_();
    }

    //Para o nivel do passaro
    //=======================================================================================================
    if (win.get_Game_Level_() == 6)
    {
      win.ChangeMovimentPinguin(mouseX, mouseY);
    } 
  
    //Terminaste o jogo, dá possibilidade para retomar
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 7))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Restart_Game_();
    } 
  
    //Nivel de falha, dá possibilidade para retomar
    //=======================================================================================================
    if ((mouseX >= 538 && mouseX <= 643) && (mouseY >= 652 && mouseY <= 702) && (win.get_Game_Level_() == 8))
    {
      playerAction = minim.loadFile("actionSond.mp3");
      playerAction.play();
      win.set_Restart_Game_();
    }  
    
    //Nivel do Puzzle
    //=======================================================================================================
    g.GmouseDragged();
  }


  //Nivel do Puzzle
  void mouseReleased()
  {
    g.GmouseReleased();  
  }  
