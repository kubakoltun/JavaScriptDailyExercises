function smallest_possible_sum(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = gcd(result, arr[i]);
  }

  return result * arr.length;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
