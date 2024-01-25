const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function transposeMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const transposedMatrix = Array.from({ length: numCols }, () => Array(numCols).fill(0));
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      transposedMatrix[col][row] = matrix[row][col];
    }
  }
  return transposedMatrix;
}
const transposedMatrix = transposeMatrix(matrix);
console.log(`Original Matrix \n${matrix.map((row) => row.join(' ')).join('\n')}`);
console.log(`Transposed Matrix \n${transposedMatrix.map((row) => row.join(' ')).join('\n')}`);
