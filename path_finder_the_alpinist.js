function pathFinder(area) {
  let a = area.split('\n'),
    max = a.length - 1,
    cost = a.map(e => [...e].fill(1e5)),
    best = 1e5,
    go = (lastAlt, oldSum, y, x) => {
      let alt = a[y][x];
      let sum = oldSum + Math.abs(alt - lastAlt);

      if (sum >= best || sum >= cost[y][x]) return;
      if (y == max && x == max) return best = sum;

      cost[y][x] = sum;

      if (x < max) go(alt, sum, y, x + 1);
      if (y < max) go(alt, sum, y + 1, x);
      if (y > 0) go(alt, sum, y - 1, x);
      if (x > 0) go(alt, sum, y, x - 1);
    }
  go(a[0][0], 0, 0, 0);
  return best;
}
