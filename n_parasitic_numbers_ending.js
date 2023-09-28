function n_parasitic_numbers_ending(lastDigit, base) {
  let res = [];
  let n = lastDigit*lastDigit;
  let carry = 0; 
  
  while (n != lastDigit) {
    res.unshift(n%base);
    carry = ~~(n/base);
    n = res[0]*lastDigit + carry;
  }
  res.push(lastDigit);
  
  return res.map( d => d.toString(base) ).join('');
}
