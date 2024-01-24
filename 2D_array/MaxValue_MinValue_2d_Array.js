const matrix = [
  [0, 2, 5],
  [4, 6, 8],
  [10, 11, 4]
];

function findMaxValue(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j]
      }
    }
  }
  return max;
}


let maxValue = findMaxValue(matrix);
console.log(`Maximum value in the matrix is ${maxValue}`);

function findMinValue(matrix) {
  let min = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j]
      }
    }
  }
  return min;
}

let minValue = findMinValue(matrix);
console.log(`Minimum value in the matrix is ${minValue}`);

