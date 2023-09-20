function twos_count(n) {
  let count = 0;

  while (n % 2 === 0 && n > 1) {
    count++;
    n /= 2;
  }

  return count;
}
