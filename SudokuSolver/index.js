function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9
  for (let y = 0 ; y < 9 ; y ++) {
    for (let x = 0 ; x < 9 ; x++) {
      if (Number(puzzle[y][x]) === 0) {
        for (let testNumber = 1 ; testNumber < 10 ; testNumber ++) {
          if (testPuzzle(x, y, testNumber, puzzle)) {
            puzzle[y][x] = testNumber;
            if (sudoku(puzzle)) return puzzle;
            puzzle[y][x] = 0;
          }
        }
        return false;
      }
    }
  }
  return puzzle;
}

function testPuzzle(x,y,numb,puzzle) {
  return checkRow(y, numb, puzzle)
    && checkColumn(x, numb, puzzle)
    && checkBox(x, y, numb, puzzle);
}

function checkColumn(x, numb, puzzle) {
  for(let y = 0 ; y < 9 ; y++) {
    if (puzzle[y][x] === numb) return false;
  }
  return true;
}

function checkRow(y, numb, puzzle) {
  for(let x = 0 ; x < 9 ; x++) {
    if (puzzle[y][x] === numb) return false;
  }
  return true;
}

function checkBox(x, y, numb, puzzle) {
  const boxX = Math.floor(x/3) * 3;
  const boxY = Math.floor(y/3) * 3;
  for (let x = 0; x < 3 ; x ++) {
    for (let y = 0; y < 3 ; y++) {
      if(puzzle[boxY+y][boxX+x] === numb) return false;
    }
  }
  return true;
}

const puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];


console.table(sudoku(puzzle2));