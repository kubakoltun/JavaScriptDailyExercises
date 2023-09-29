function numbers_in_strings(s) {
  const numberGroupings = s.match(/\d+/g);

  if (!numberGroupings) {
    return 0;
  }

  const maxNumber = Math.max(...numberGroupings.map(Number));

  return maxNumber;
}
