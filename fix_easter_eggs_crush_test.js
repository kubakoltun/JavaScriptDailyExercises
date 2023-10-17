function height(n, m) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let j = 1; j <= m; j++) {
    for (let i = 1; i <= n; i++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1] + 1;
    }
  }

  let maxH = 0;
  while (dp[n][maxH] < dp[n][m]) {
    maxH++;
  }

  return maxH;
}
