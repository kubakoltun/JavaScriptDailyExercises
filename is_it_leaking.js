const FLOW_DIRECTIONS = {
  '┗': ['up', 'right'],
  '┓': ['down', 'left'],
  '┏': ['down', 'right'],
  '┛': ['up', 'left'],
  '━': ['left', 'right'],
  '┃': ['up', 'down'],
  '┣': ['up', 'down', 'right'],
  '┫': ['up', 'down', 'left'],
  '┳': ['down', 'left', 'right'],
  '┻': ['up', 'left', 'right'],
  '╋': ['up', 'down', 'left', 'right'],
  '.': []
}

const OPPOSITE_DIRECTIONS = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left'
}

const moveTowardsDirection = (direction, row, col) => {
  switch (direction) {
    case 'up':
      return [row - 1, col]
    case 'down':
      return [row + 1, col]
    case 'left':
      return [row, col - 1]
    case 'right':
      return [row, col + 1]
  }
}

function markSquare(map, row, column) {
  const square = map[row][column]

  for (const direction of square.flowDirections) {
    const [r, c] = moveTowardsDirection(direction, row, column)
    const connectedSquare = map[r] && map[r][c]

    if (connectedSquare === undefined) {
      square.flows = true
    } else if (
      !connectedSquare.flowDirections.includes(OPPOSITE_DIRECTIONS[direction])
    ) {
      square.leaks = true
    } else if (connectedSquare.flows) {
      square.flows = true
    }
  }
}

function checkPipe(stringMap) {
  const map = stringMap.map(row =>
    Array.prototype.map.call(row, square => ({
      flowDirections: FLOW_DIRECTIONS[square]
    }))
  )

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      markSquare(map, row, col)
    }
  }

  for (let row = map.length - 1; row >= 0; row--) {
    for (let col = map[0].length - 1; col >= 0; col--) {
      markSquare(map, row, col)

      const square = map[row][col]
      if (square.flows && square.leaks) {
        return false
      }
    }
  }

  return true
}
