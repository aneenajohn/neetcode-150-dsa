var isValidSudoku = function (board) {
    const numOfRows = board.length;
    const numOfCols = board[0].length;
    let duplicateFound = false;
    console.log({ numOfRows, numOfCols });
  
    // Duplicate in Rows
    for (let i = 0; i < numOfRows; i++) {
      let row = board[i];
      let rowRes = checkDupsInRow(row);
      if (rowRes) console.log('Duplicate in row: ', rowRes);
      else console.log('No dup in row: ', rowRes);
    }
    // return duplicateFound;
  
    let columnEntries = [];
    for (let col = 0; col < numOfCols; col++) {
      let localCol = [];
      for (let row = 0; row < numOfRows; row++) {
        localCol.push(board[row][col]);
      }
      columnEntries.push(localCol);
    }
    console.log('columnEntries: ', columnEntries);
  
    for (let j = 0; j < columnEntries.length; j++) {
      let col = columnEntries[j];
      console.log('Col as row:', col);
      let colRes = checkDupsInRow(col);
      if (colRes) console.log('Duplicate in col: ', colRes);
      else console.log('No dup in col: ', colRes);
    }
  
    function checkDupsInRow(row) {
      console.log({ row });
      let nums = row.filter((key) => key !== '.');
      console.log(`Nums:`, nums);
      let uniqueNums = new Set();
  
      for (let num of nums) {
        if (uniqueNums.has(num)) {
          duplicateFound = true;
          return duplicateFound;
        }
        uniqueNums.add(num);
        console.log('uniqueNums: ', uniqueNums);
      }
      return duplicateFound;
    }
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
    ['.', '.', '.', '.', '8', '.', '.', '7', '3'],
  ];
  
  isValidSudoku(board1);
  