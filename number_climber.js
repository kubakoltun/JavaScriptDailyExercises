function climb(n) {
  if (n < 1) {
    return [];
  }
  
  if (n === 1) {
    return [1];
  }

  const sequence = climb(Math.floor(n / 2));
  sequence.push(n);

  return sequence;
}
