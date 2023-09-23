function killKthBit(n, k) {
  const mask = ~(1 << (k - 1));
  const result = n & mask;
  
  return result;
}
