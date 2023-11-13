function compress(water) {
  const moleculs = [], piece = water.split('\n');

  piece.forEach((r, x) => [...r].forEach((v, y) => {
    if (v === '+') {
        if (piece[x - 1] && piece[x - 1][y] === 'O' || piece[x + 1][y] === 'O') moleculs.push({x: x, y: y - 1, hor: true});
        else if (piece[x][y - 1] === 'O' || piece[x][y + 1] === 'O') moleculs.push({x: x - 1, y: y, hor: false});
    }
  }));

  while (compressAxis(moleculs, 'x', 'y', h => h) && compressAxis(moleculs, 'y', 'x', h => !h));

  const h = Math.max(...moleculs.map(m => m.x + 2 * !m.hor)) + 1;
  const w = Math.max(...moleculs.map(m => m.y + 2 * m.hor)) + 1;
  const ice = Array.from(Array(h), _ => Array(w).fill(' '));

  for (const m of moleculs) {
      const [dx, dy] = (m.hor) ? [0, 1] : [1, 0];
      ice[m.x][m.y] = 'H'; ice[m.x + dx][m.y + dy] = 'O'; ice[m.x + 2 * dx][m.y + 2 * dy] = 'H';
  }

  return ice.map(r => r.join('').trimEnd()).join('\n');
}

function compressAxis(moleculs, i, j, f) {
  moleculs.sort((a, b) => a[j] - b[j] || a[i] - b[i]);
  let updated = false;

  const n = Math.max(...moleculs.map(m => m[i] + 2 * !f(m.hor))) + 1;
  const limit = Array(n).fill(0);

  for (const m of moleculs) {
      let x = m[i], y;
      if (f(m.hor)) {
          y = limit[x];
          limit[x] += 3;
      } else {
          y = Math.max(limit[x], limit[x + 1], limit[x + 2]);
          limit[x] = limit[x + 1] = limit[x + 2] = y + 1;
      }
      updated |= m[j] !== y;
      m[j] = y;
  }
  
  return updated;
}
