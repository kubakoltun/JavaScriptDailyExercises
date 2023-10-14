
function make_a_spiral(size) {
  const spiral = Array.from({ length: size }, () => Array(size).fill(0));
  
  let num = 1; 
  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;
  
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      spiral[top][i] = num;
      num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiral[i][right] = num;
      num++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiral[bottom][i] = num;
        num++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiral[i][left] = num;
        num++;
      }
      left++;
    }
  }

  return spiral;
}

function displaySpiral(spiral) {
  for (let row of spiral) {
    console.log(row.join(''));
  }
}
