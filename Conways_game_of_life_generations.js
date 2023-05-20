function getGeneration(cells, generations) {
  if (cells.length === 0 || cells[0].length === 0) {
    return [[]]; 
  }

  let numRows = cells.length;
  let numCols = cells[0].length;
  let evolution = cells.slice(); 

  for (let g = 0; g < generations; g++) {
    let newGeneration = Array(numRows).fill().map(() => Array(numCols).fill(0));

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        let neighbours = 0;

        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            if (di === 0 && dj === 0) continue;
            let ni = i + di;
            let nj = j + dj;
            if (ni < 0 || ni >= numRows || nj < 0 || nj >= numCols) continue;
            if (evolution[ni][nj] === 1) neighbours++;
          }
        }

        if (evolution[i][j] === 1) {
          if (neighbours < 2 || neighbours > 3) {
            newGeneration[i][j] = 0;
          } else {
            newGeneration[i][j] = 1;
          }
        } else {
          if (neighbours === 3) {
            newGeneration[i][j] = 1;
          }
        }
      }
    }

    evolution = newGeneration;
  }

  // Crop the evolution array
  let firstRowIndex = -1;
  let lastRowIndex = -1;
  let firstColIndex = -1;
  let lastColIndex = -1;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (evolution[i][j] === 1) {
        if (firstRowIndex === -1 || i < firstRowIndex) {
          firstRowIndex = i;
        }
        if (lastRowIndex === -1 || i > lastRowIndex) {
          lastRowIndex = i;
        }
        if (firstColIndex === -1 || j < firstColIndex) {
          firstColIndex = j;
        }
        if (lastColIndex === -1 || j > lastColIndex) {
          lastColIndex = j;
        }
      }
    }
  }

  if (firstRowIndex === -1 || lastRowIndex === -1 || firstColIndex === -1 || lastColIndex === -1) {
    return [[]]; 
  }

  if (lastRowIndex < numRows - 1) {
    lastRowIndex++;
  }
  if (lastColIndex < numCols - 1) {
    lastColIndex++;
  }

  let croppedEvolution = evolution
    .slice(firstRowIndex, lastRowIndex + 1)
    .map(row => row.slice(firstColIndex, lastColIndex + 1));

  return croppedEvolution;
}
