crossword-puzzle-solver.js
function crossWord(puzzle, words) {
  words = words.sort((a, b) => (a > b ? 1 : -1));

  let rows = puzzle.split('\n');
  let rowClues = [];
  let colClues = [];
 
  const flip = (p) => [...Array((a = p.split('\n'))[0].length)].map((_, x) =>
    [...Array(a.length)].map((_, y) => a[y][x]).join('')).join('\n');
  const matchClue = /(?=\S*\?)\S{3,20}/g;
  const convertIndex = (i) => (i % (rows.length + 1)) * (rows[0].length + 1) + ((i / (rows.length + 1)) | 0);

  while ((match = matchClue.exec(puzzle))) {
    rowClues.push([match.index, match[0], 'r']);
  }

  while ((match = matchClue.exec(flip(puzzle)))) {
    colClues.push([convertIndex(match.index), match[0], 'c']);
  }

  let clues = [...rowClues, ...colClues].sort((a, b) =>
    a[0] - b[0] || (a[2] < b[2] ? 1 : -1)
  );

  for (let i = 0; i < clues.length; i++) {
    if (RegExp('^' + clues[i][1].replace(/\?/g, '\\w') + '$').test(words[0])) {
      let newPuzzle = clues[i][2] === 'r' ? puzzle.replace(clues[i][1], words[0]) : flip(flip(puzzle).replace(clues[i][1], words[0]));
      if (!words[1]) return newPuzzle;
      let answer = crossWord(newPuzzle, words.slice(1));
      if (answer.length) return answer;
    }
  }

  return '';
}
