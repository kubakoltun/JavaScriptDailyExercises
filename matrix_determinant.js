function determinant(matrix) {
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix[0][0];
  }

  if (matrix.length === 2 && matrix[0].length === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    const minor = [];

    for (let i = 1; i < matrix.length; i++) {
      minor.push(matrix[i].slice(0, j).concat(matrix[i].slice(j + 1)));
    }
    det += matrix[0][j] * determinant(minor) * (j % 2 === 0 ? 1 : -1);
  }
  
  return det;
}
