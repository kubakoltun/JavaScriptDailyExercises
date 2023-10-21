function range_extraction(list) {
  if (list.length === 0) {
    return '';
  }

  let result = [];
  let start = list[0];
  let end = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] === end + 1) {
      end = list[i];
    } else {
      if (start === end) {
        result.push(start.toString());
      } 
      else if (end === start + 1) {
        result.push(start + ',' + end);
      } else {
        result.push(start + '-' + end);
      }

      start = list[i];
      end = list[i];
    }
  }

  if (start === end) {
    result.push(start.toString());
  } 
  else if (end === start + 1) {
    result.push(start + ',' + end);
  } else {
    result.push(start + '-' + end);
  }

  return result.join(',');
}
