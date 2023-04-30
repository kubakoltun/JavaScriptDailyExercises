function is_valid_walk(walk) {
  inTime = false;
  walkingCord = 0;
  
  if (walk.length != 10) {
    inTime = false;
  } 
  else {
    for (var i = 0; i < walk.length; i++) {
      if (walk[i] == 'n') {
        walkingCord += 1;
      }
      else if (walk[i] == 's') {
        walkingCord -= 1;
      }
      else if (walk[i] == 'w') {
        walkingCord += 100;
      }
      else if (walk[i] == 'e') {
        walkingCord -= 100;
      }
    }
    
    if (walkingCord == 0) {
      inTime = true;
    } 
    else {
      inTime = false;
    }
  }
  
  return inTime; 
}
