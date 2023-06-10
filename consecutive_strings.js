function longestConsec(strarr, k) {
  console.log(strarr);
  console.log(k);
  const l = strarr.length-1;
  let maxJoin = "";
  let maxL = 0;
  let join = "";
  
  if (l === 0 || k > l || k <= 0) {
    return "";
  }
  
  for (let i = 0; i < l+1; i++) {
    join  = strarr[i];
    for (let j = i+1; j < i+k; j++) {
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
