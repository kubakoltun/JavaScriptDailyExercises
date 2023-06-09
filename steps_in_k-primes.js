function kprimesStep(k, step, start, nd) {
  function sievePrimes(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }

    return primes;
  }

  const primes = sievePrimes(nd); // Generate primes up to the upper limit

  function countPrimeFactors(n) {
    let count = 0;
    for (let i = 0; i < primes.length; i++) {
      while (n % primes[i] === 0) {
        count++;
        n /= primes[i];
        if (count > k) {
          return 0;
        }
      }
      if (n === 1) {
        break;
      }
    }
    return count === k ? 1 : 0;
  }

  let result = [];
  let current = Math.max(start, 2);
  while (current + step <= nd) {
    if (countPrimeFactors(current) === 1 && countPrimeFactors(current + step) === 1) {
      result.push([current, current + step]);
    }
    current++;
  }

  return result;
}
