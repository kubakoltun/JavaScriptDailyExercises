function tribonacci(signature, n) {
  var sum = 0;
  var j = 0;
  
  if (n == 0) {
    return [];
  } else {
    var arr  = signature;
  }
  if (n == 1) {
   return [signature[0]];
  }
  else if (n == 2) {
    return [signature[0], signature[1]];
  }
  
  n -= signature.length+1;
  for (var i = arr.length-1; n >= 0; i--) {
    j++;
    sum += arr[i];
    if (j == 3) {
      arr.push(sum);
      sum = 0;
      j = 0;
      i = arr.length;
      n--;
    }
  }
  
  return arr;
}
