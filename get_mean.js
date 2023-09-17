function getMean(arr, x, y) {
  if (x > 1 && y > 1 && x <= arr.length && y <= arr.length) {
      const meanOfFirstX = arr.slice(0, x).reduce((sum, num) => sum + num, 0) / x;
      const meanOfLastY = arr.slice(-y).reduce((sum, num) => sum + num, 0) / y;
  
      return (meanOfFirstX + meanOfLastY) / 2;
    } else {
      return -1;
    }
}
