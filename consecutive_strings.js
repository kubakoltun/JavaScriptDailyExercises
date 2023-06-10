function longestConsec(strarr, k) {
  const l = strarr.length;
  let maxJoin = "";
  let maxL = 0;
  let join = "";
  
  if (l === 0 || k > l || k <= 0) {
    return "";
  }
  
  for (let i = 0; i < l; i++) {
    join  = strarr[i];
    for (let j = i+1; j < i+k && j < l; j++) {
      if (j > l) {
        break;
      }
      join  += strarr[j];
    }
    if (join.length > maxL) {
      maxL = join.length;
      maxJoin = join;
    }
  }
  
  return maxJoin;
}
