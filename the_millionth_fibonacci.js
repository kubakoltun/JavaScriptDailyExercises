const f = [0n, 1n];

function fib(n) {
  const odd = n & 1;
  
  if (n < 0) {
    return BigInt(-!odd | 1) * fib(-n);
  }
  
  if (typeof f[n] == 'undefined') {
    const k = n >> 1;
    const fibk = fib(k);
    f[n] = odd ? fib(k + 1) ** 2n + fibk ** 2n : (2n * fib(k - 1) + fibk) * fibk; 
  }
  
  return f[n]; 
}
