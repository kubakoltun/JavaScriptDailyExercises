function maxSumOf(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxSum = matrix[0][0];

  for (let left = 0; left < cols; left++) {
    const temp = new Array(rows).fill(0);

    for (let right = left; right < cols; right++) {
      for (let i = 0; i < rows; i++) {
        temp[i] += matrix[i][right];
      }

      let maxEndingHere = temp[0];
      let maxSoFar = temp[0];

      for (let i = 1; i < rows; i++) {
        maxEndingHere = Math.max(temp[i], maxEndingHere + temp[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
      }
      maxSum = Math.max(maxSum, maxSoFar);
    }
  }

  return maxSum;
}
