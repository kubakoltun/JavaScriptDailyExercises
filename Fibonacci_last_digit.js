function Fibonacci_last_digit(index) {
  if (index <= 1) {
    return index; 
  }

  let prev = 0; 
  let curr = 1; 

  for (let i = 2; i <= index; i++) {
    const next = (prev + curr) % 10; 
    prev = curr;
    curr = next;
  }

  return curr;
}
