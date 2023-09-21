function find_odd_one_out(numbers) {
  return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
}
