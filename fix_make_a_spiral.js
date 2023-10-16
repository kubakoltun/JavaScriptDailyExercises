function make_a_spiral(n) {
  const spiral = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let i = 0;
  let j = 0;
  let direction = 0;

  while (i < n && j < n) {
    spiral[i][j] = 1;
    const nextI = i + (direction === 0 ? 1 : direction === 1 ? 0 : -1);
    const nextJ = j + (direction === 0 ? 0 : direction === 2 ? -1 : 1);
    if (nextI < 0 || nextI >= n || nextJ < 0 || nextJ >= n || spiral[nextI][nextJ] === 1) {
      direction = (direction + 1) % 4;
    } else {
      i = nextI;
      j = nextJ;
    }
  }

  return spiral;
}
