function sumOfDivided(lst) {
  if (lst.length == 0) { return []; }

  let m = Math.max.apply(null, lst.map(Math.abs));
  let primes = [];
  let marked = Array(m+1);

  for (let i = 2; i <= m; ++i) {
      if(marked[i]) continue;

      let sum = 0, isMul = false;
      lst.forEach(function(n) { if(n % i == 0) { sum += n; isMul = true; } });
      if (isMul) primes.push([i, sum]);

      for (let j = 2*i; j <= m; j += i) {
          marked[j] = true;
      }
  }

  return primes;
}
