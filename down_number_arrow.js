function down_arrow_numbers(n) {
  let r = '';
  for (let i = n; i > 0; i--) {
    let l = i%10;
    
    for (let j = i-1; j > 0; j--) {
      l = `${j%10}${l}${j%10}`;
    }
    r += `${' '.repeat(n-i)}${l}${i>1? "\n" : ''}`;
  }

  return r;
}
