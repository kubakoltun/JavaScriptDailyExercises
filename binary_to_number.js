const binary_to_number = arr => {
  var hold = 0;
  var out = 0;
  var j = 0;
  for (var i = arr.length-1; i >= 0; i--) {
    out = 0;
    if (arr[i] == 1) {
      out = Math.pow(2, j);
    }
    hold += out;
    j++;
  }
  
  return hold;
};
