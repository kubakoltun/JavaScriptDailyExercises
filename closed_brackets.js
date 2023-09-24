function closed_brackets(str) {
  let openCount = 0;
  let jokerCount = 0;

  for (const char of str) {
    if (char === '(') {
      openCount++;
    } 
    else if (char === 'J') {
      jokerCount++;
    } 
    else if (char === ')') {
      if (openCount > 0) {
        openCount--;
      } 
      else if (jokerCount > 0) {
        jokerCount--;
      } else {
        return false; 
      }
    }
  }

  return openCount === 0 || jokerCount >= openCount;
}
