//? QUESTION
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

//* SOLUTION:
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const numOfRows = board.length;
  const numOfCols = board[0].length;

  // Function to check duplicates in a row or column
  function checkDups(rowOrCol) {
    let nums = rowOrCol.filter((key) => key !== '.');
    let uniqueNums = new Set();

    for (let num of nums) {
      if (uniqueNums.has(num)) {
        return true; // Duplicate found
      }
      uniqueNums.add(num);
    }
    return false; // No duplicates
  }

  // Check duplicates in rows
  for (let i = 0; i < numOfRows; i++) {
    if (checkDups(board[i])) {
      console.log('Duplicate in row: ', i);
      return false;
    }
  }

  // Check duplicates in columns
  for (let col = 0; col < numOfCols; col++) {
    let columnEntries = [];
    for (let row = 0; row < numOfRows; row++) {
      columnEntries.push(board[row][col]);
    }
    if (checkDups(columnEntries)) {
      console.log('Duplicate in column: ', col);
      return false;
    }
  }

  // Check duplicates in 3x3 sub-boxes
  for (let startRow = 0; startRow < numOfRows; startRow += 3) {
    for (let startCol = 0; startCol < numOfCols; startCol += 3) {
      let subBox = [];
      for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
          subBox.push(board[row][col]);
        }
      }
      if (checkDups(subBox)) {
        console.log('Duplicate in sub-box: ', { startRow, startCol });
        return false;
      }
    }
  }

  return true;
};

const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '.'],
];

console.log(isValidSudoku(board1));
