function hotSingles(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  let result = [];
  let len = combinedArray.length;

  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      if (combinedArray[i] === combinedArray[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(combinedArray[i]);
    }
  }

  return result;
}
