function closed_brackets(s) {
  let a = 0;
  let b = 0;
  
  for (const x of s) {
    if (x === '(') {
      a += 1;
      b += 1;
    } else {
      a = Math.max(a - 1, 0);
      b += x === 'J' ? 1 : -1;
      if (b < 0) return false;
    }
  }
  
  return a === 0;
}
