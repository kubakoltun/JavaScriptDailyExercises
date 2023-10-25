function number_of_integer_partitions(n) {
  const partitionCount = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    partitionCount[i] = new Array(n + 1).fill(0);
  }

  for (let i = 0; i <= n; i++) {
    partitionCount[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        partitionCount[i][j] = partitionCount[i - 1][j] + partitionCount[i][j - i];
      } else {
        partitionCount[i][j] = partitionCount[i - 1][j];
      }
    }
  }

  return partitionCount[n][n];
}
