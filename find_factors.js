function factors(x) {
  if (!Number.isInteger(x) || x < 1) {
    return -1;
  }
  let factors = [];
  
  for (let i = x; i > 0; i--) {
    if (x % i === 0) {
      factors.push(i);
    }
  }
  
  return factors;
}
