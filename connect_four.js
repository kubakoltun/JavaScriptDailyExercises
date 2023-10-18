function connect_four(piecesPositionList) {
  const grid = Array.from({ length: 6 }, () => Array(7).fill(null));

  function checkWinner(row, col) {
    const directions = [
      [1, 0], [0, 1], [1, 1], [1, -1]
    ];

    for (const [dx, dy] of directions) {
      let count = 1;
      const color = grid[row][col];

      for (let i = 1; i < 4; i++) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;

        if (
          newRow < 0 || newRow >= 6 ||
          newCol < 0 || newCol >= 7 ||
          grid[newRow][newCol] !== color
        ) {
          break;
        }

        count++;
      }

      for (let i = -1; i > -4; i--) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;

        if (
          newRow < 0 || newRow >= 6 ||
          newCol < 0 || newCol >= 7 ||
          grid[newRow][newCol] !== color
        ) {
          break;
        }

        count++;
      }

      if (count >= 4) {
        return color === 'Red' ? 'Red' : 'Yellow';
      }
    }

    return null;
  }

  for (const move of piecesPositionList) {
    const [col, color] = move.split('_');
    const columnIndex = col.charCodeAt(0) - 'A'.charCodeAt(0);

    for (let row = 5; row >= 0; row--) {
      if (!grid[row][columnIndex]) {
        grid[row][columnIndex] = color;
        const winner = checkWinner(row, columnIndex);
        if (winner) {
          return winner;
        }
        break;
      }
    }
  }

  return "Draw";
}
