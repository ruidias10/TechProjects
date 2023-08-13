import java.util.Arrays;

class Rating {
  
  boolean isRating = false;  
  int[] result = new int[4];

  // Construtor da Class
  //================================================================= 
  Rating ()
  {
    this.result[0] = (int)random(80, 100);
    this.result[1] = (int)random(60, 79);
    this.result[2] = (int)random(40, 59);
    this.result[3] = (int)random(10, 39);
    
    import java.util.Arrays;
  }

  // Recebe novo valor se tiver melhor pontuação do que o ultimo mostra acrescenta aos resulatdos
  //================================================================= 
  void setRating()
  {
    if (!this.isRating)
    {
      int value = Rating;
      //Arrays.sort(this.result);
      for (int i=0; i<=3; i++)
      {
        if (value > this.result[i]) 
        {
          this.isRating = true;
          this.result[i] = value;
          break;
        }
      }
      
      //int x = 3;
      //int[] tmpResult = new int[4];
      //for (int a = 0; a <=3; a++) {
        //tmpResult[a] = this.result[x];
        //x--;
      //}
      
      //this.result = tmpResult; 
    }
  }

  // Devolve o rating
  //================================================================= 
  int[] getRating()
  {
    return this.result;
  }
}

