function  kprimesStep(k, step, start, nd) {
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
    let count = 0;
    let currentFactor = factors[0];
    let currentCount = 1;
    for (let i = 1; i < factors.length; i++) {
      if (factors[i] === currentFactor) {
        currentCount++;
      } else {
        if (currentCount >= k) {
          count++;
        }
        currentFactor = factors[i];
        currentCount = 1;
      }
    }
    if (currentCount >= k) {
      count++;
    }
    return count;
  }

  let result = [];
  let current = start;
  while (current + step <= nd) {
    if (countPrimeFactors(current) === k && countPrimeFactors(current + step) === k) {
      result.push([current, current + step]);
    }
    current++;
  }

  return result.length > 0 ? result : [];
}
