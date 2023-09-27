function next_bigger_number(n){
  const digits = Array.from(String(n), Number);
  let i = digits.length - 2;
  
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  if (i === -1) {
    return -1;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  const rightOfPivot = digits.slice(i + 1);
  rightOfPivot.sort((a, b) => a - b);
  const result = [...digits.slice(0, i + 1), ...rightOfPivot];
  
  return parseInt(result.join(''));
}
