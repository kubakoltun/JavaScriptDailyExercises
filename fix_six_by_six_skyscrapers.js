function six_by_six_skyscrapers(clues) {
  const size = 6;
  const puzzle = Array(size).fill().map(() => Array(size).fill(0));
  
  function isSafe(row, col, num) {
    for (let i = 0; i < size; i++) {
      if (puzzle[row][i] === num || puzzle[i][col] === num) {
        return false;
      }
    }
    return true;
  }

  function solve() {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (puzzle[row][col] === 0) {
          for (let num = 1; num <= size; num++) {
            if (isSafe(row, col, num)) {
              puzzle[row][col] = num;
              if (isSolved()) {
                return true;
              }
              if (solve()) {
                return true;
              }
              puzzle[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isSolved() {
    for (let i = 0; i < size; i++) {
      if (clues[i] !== 0 && visibleCount(puzzle[i]) !== clues[i]) {
        return false;
      }
      if (clues[i + size] !== 0 && visibleCount(puzzle.map(row => row[i])) !== clues[i + size]) {
        return false;
      }
    }
    return true;
  }

  function visibleCount(row) {
    let max = 0;
    let count = 0;
    
    for (let i = 0; i < size; i++) {
      if (row[i] > max) {
        max = row[i];
        count++;
      }
    }
    return count;
  }

  if (solve()) {
    return puzzle;
  } else {
    return null; 
  }
}
