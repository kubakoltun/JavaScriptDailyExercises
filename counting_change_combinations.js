function counting_change_combinations(amount, denominations) {
  const ways = new Array(amount + 1).fill(0);
  ways[0] = 1;

  for (const coin of denominations) {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin];
    }
  }

  return ways[amount];
}
