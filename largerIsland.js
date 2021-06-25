/**
* @param {number[][]} grid
* @return {number}
*/

let seen, cols, rows, myGrid;
var island = function (row, col) {
  if (row < 0 || col < 0 || row > rows-1 || col > cols-1 || seen[row][col] == -1 || !myGrid[row][col])
    return 0;
  seen[row][col] = -1;
  return (1 + island(row + 1, col) + island(row - 1, col) + island(row, col + 1) + island(row, col - 1));
}
var maxAreaOfIsland = function (grid) {
  myGrid = grid;
  rows = myGrid.length;
  cols = myGrid[0].length;
  seen = grid;
  let max = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      //console.log(myGrid[row][col], seen[row][col])
      max = Math.max(...[island(row, col)], max);
    }
  }

  console.log(max);
  return max;
};


maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]);
