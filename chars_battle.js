function battle(x, y) {
  let sumX = 0;
  let sumY = 0;
  let res = "";
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) === x.charAt(i).toUpperCase()) {
      sumX += (x.charAt(i).charCodeAt(0) - 64);
    } else {
      sumX += (x.charAt(i).charCodeAt(0) - 96)/2;
    }
  }
  for (let i = 0; i < y.length; i++) {
    if (y.charAt(i) === y.charAt(i).toUpperCase()) {
      sumY += (y.charAt(i).charCodeAt(0) - 64);
    } else {
      sumY += (y.charAt(i).charCodeAt(0) - 96)/2;
    }
  }
  
  if (sumX > sumY) {
    res = x;
  }
  else if ( sumY > sumX) {
    res = y;
  } else {
    res = "Tie!";
  }
  
  return res;
}
