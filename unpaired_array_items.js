function hotSingles(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const elementCountMap = new Map();

  combinedArray.forEach((element) => {
    elementCountMap.set(element, (elementCountMap.get(element) || 0) + 1);
  });

  const uniqueElements = combinedArray.filter((element) => elementCountMap.get(element) === 1);

  return uniqueElements;
}
