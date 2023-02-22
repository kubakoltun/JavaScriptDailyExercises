function sum_two_smallest(numbers) {  
  var sum = 0;
  var sorted = numbers.sort((a,b) => a - b).slice(0, 2);
  
  for (var i = 0; i < sorted.length; i++) {
    sum += sorted[i];
  }
  
  return sum;
}
