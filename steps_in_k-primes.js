function kprimesStep(k, step, start, nd) {
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function getPrimeFactors(n) {
    let factors = [];
    let i = 2;
    while (i <= n) {
      if (n % i === 0 && isPrime(i)) {
        factors.push(i);
        n /= i;
      } else {
        i++;
      }
    }
    return factors;
  }

  function countPrimeFactors(n) {
    let factors = getPrimeFactors(n);
    let count = factors.length;
    return count === k ? 1 : 0;
  }

  let result = [];
  let current = start;
  while (current + step <= nd) {
    if (countPrimeFactors(current) === 1 && countPrimeFactors(current + step) === 1) {
      result.push([current, current + step]);
    }
    current++;
  }

  return result;
}
