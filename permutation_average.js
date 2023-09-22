function permutationAverage(n){
  const digits = n.toString().split('');
  const numPermutations = factorial(digits.length);
  let sum = 0;

  permute(digits, 0, digits.length - 1, (permuted) => {
    const num = parseInt(permuted.join(''), 10);
    sum += num;
  });

  const average = Math.round(sum / numPermutations);

  return average;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function permute(arr, l, r, callback) {
  if (l === r) {
    callback([...arr]);
  } else {
    for (let i = l; i <= r; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]];
      permute(arr, l + 1, r, callback);
      [arr[l], arr[i]] = [arr[i], arr[l]];
    }
  }
}
