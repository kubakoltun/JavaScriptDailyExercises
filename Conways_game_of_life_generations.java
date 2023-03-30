function getGeneration(cells, generations) {
  let numRows = cells.length;
  let numCols = cells[0].length;

  let evolution = cells;
  //efficiency is completly off - need to add more function_wise approach
  //reduce the usage of checking neighbours to a possibility of their occurrence
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

  // Check if the first row is all 0s
  while (evolution[0].every(cell => cell === 0)) {
    evolution.shift(); // Remove the first row
    evolution.push(Array(numCols).fill(0)); // Add a new row at the bottom with all 0s
  }

  // Check if the last row has any live cells
  if (!evolution[numRows - 1].some(cell => cell === 1)) {
    evolution.pop(); // Remove the last row
  }
  let lastRow = evolution[numRows - 1];
let newLastRow = Array(numCols).fill(0);
for (let j = 0; j < numCols; j++) {
  let neighbours = 0;

  for (let di = -1; di <= 1; di++) {
    for (let dj = -1; dj <= 1; dj++) {
      if (di === 0 && dj === 0) continue;
      let ni = numRows - 2 + di;
      let nj = j + dj;
      if (ni < 0 || ni >= numRows || nj < 0 || nj >= numCols) continue;
      if (evolution[ni][nj] === 1) neighbours++;
    }
  }

  if (evolution[numRows - 1][j] === 1) {
    if (neighbours < 2 || neighbours > 3) {
      newLastRow[j] = 0;
    } else {
      newLastRow[j] = 1;
    }
  } else {
    if (neighbours === 3) {
      newLastRow[j] = 1;
    }
  }
}
evolution.push(newLastRow);


  return evolution;
}
