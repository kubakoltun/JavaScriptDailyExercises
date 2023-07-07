function pickPeaks(arr) {
  let output = {pos: [], peaks: []};
  let topPeak = arr[0];
  let topPos = 0;
  
  if (arr.length === 0) {
    return output;
  }
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) { 
      topPeak = arr[i];
      topPos = i;
    }
    else if (arr[i] == arr[i-1]) {
      //{}  
    } 
    else if (arr[i] < arr[i-1]) {
      if (topPos > 0) {
        output.pos.push(topPos);
        output.peaks.push(topPeak);
        topPos = 0;
      } 
    } else {
      //{}
    }
  }
  
  return output;
}
