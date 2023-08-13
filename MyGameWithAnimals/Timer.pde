class Timer {
 
  int startTime;
  int totalTime;
  
  Timer(int value) 
  {
    this.totalTime = value;
    startTime = millis();
  }

  
  int getTimeNow()
  {
    return millis() - startTime;  
  }
  
  
  
  boolean isFinished() 
  { 
    int passedTime = millis() - this.startTime;
    if (passedTime > this.totalTime) {
      return true;
    } else {
      return false;
    }
  }
}
