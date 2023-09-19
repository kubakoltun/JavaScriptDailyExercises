function unpaired_array_items(arr1, arr2) {
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
    let additional_con1 = arr1.includes(combinedArray[i]) && !arr2.includes(combinedArray[i])
    let additional_con2 = !arr1.includes(combinedArray[i]) && arr2.includes(combinedArray[i])
    if ((count === 1 || additional_con1 || additional_con2) && !result.includes(combinedArray[i])) {
      result.push(combinedArray[i]);
    }
  }

  return result;
}
