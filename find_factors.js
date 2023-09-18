function find_factors(x) {
  let factors = [];
  
  for (let i = x; i > 0; i--) {
    if (x % i === 0) {
      factors.push(i);
    }
  }
  
  return factors;
}
