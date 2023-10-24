function explosive_sum(n) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      ways[j] += ways[j - i];
    }
  }

  return ways[n];
}
