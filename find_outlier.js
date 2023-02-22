function find_outlier (integers) {
  var evenConfirm = 0;
  var oddConfirm = 0;
  
  var evenHold = 0;
  var oddHold = 0;
  
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenConfirm++;
    }
    if (integers[i] % 2 != 0) {
      oddConfirm++;
    }
  }
  if (evenConfirm > oddConfirm) {
    for (var j = 0; j < integers.length; j++) {
      if (integers[j] % 2 != 0) {
        oddHold = integers[j];
      } 
    }
    return oddHold;
  }
  else {
    for (var g = 0; g < integers.length; g++) {
      if (integers[g] % 2 == 0) {
        evenHold = integers[g];
      } 
    }
    
    return evenHold;
  }
}
