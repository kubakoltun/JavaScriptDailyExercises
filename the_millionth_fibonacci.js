function the_millionth_fibonacci(n) {
  const fibArray = [BigInt(0), BigInt(1)];

  if (n < 0) {
    for (let i = -1; i >= n; i--) {
      const nextFib = fibArray[0] - fibArray[1];
      fibArray.unshift(nextFib);
    }
  }
  else {
    while (fibArray.length <= n) {
      const nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
      fibArray.push(nextFib);
    }
  }

  return fibArray[n];
}
