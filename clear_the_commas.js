function clear_the_commas(str) {
  const filteredStr = str.replace(/,+/g, ',').replace(/,+\s*$/, '');

  return filteredStr;
}
