debugger;
const directions = [
  [2, 3, 2],
  [1, 1, 1],
  [1, 1, 1],
  [4, 5, 4],

  // [2, 0, 0, 0, 0, 0],
  // [4, 0, 2, 0, 0, 0],
  // [0, 0, 1, 3, 2, 1],
  // [0, 0, 4, 5, 1, 0],
  // [0, 0, 0, 0, 1, 0],
  // [0, 0, 0, 0, 4, 0]
];

const directionBoxes = {
  0: [1, 3],
  1: [2, 4],
  2: [1, 4],
  3: [3, 4],
  4: [2, 3],
  5: [1, 2],
};

const check = {
  1: 3,
  2: 4,
  3: 1,
  4: 2
}

function trafficMap(lastMove) {
  let start = directions[0][0]; // starting position
  let end = directions[directions.length - 1][directions[0].length - 1]; // last position

  if ((start !== 0 && start !== 2) || (end !== 0 && end !== 4)) {
    return false;
  } else {

    let i = 0;
    let j = 0;

    while (i >= 0 && i < directions.length && j >= 0 && j < directions[0].length) {
      // console.log(i, j);
      let values = directions[i][j];
      // console.log("values", values);

      let [startPoint, endPoint] = directionBoxes[values];
      // console.log("S,E", startPoint, endPoint);

      let track = [startPoint, endPoint];
      const startIndex = track.indexOf(check[lastMove]);
      // console.log(startIndex);

      if (startIndex < 0) {
        return false;
      }

      endPoint = track[startIndex == 0 ? 1 : 0];
      // console.log('track', track)

      if (i === directions.length - 1 && j === directions[0].length - 1) {
        if (endPoint == 3) {
          return true;
        }
      }

      if (endPoint == 1) {
        j--;
        lastMove = 1; // Set lastMove for the next iteration
      } else if (endPoint == 2) {
        i--;
        lastMove = 2;
      } else if (endPoint == 3) {
        j++;
        lastMove = 3;
      } else if (endPoint == 4) {
        i++;
        lastMove = 4;
      }
    }
  }
  return false;
}

const startTime = performance.now();

console.log(trafficMap(3));

const endTime = performance.now();

// Calculate the execution time in milliseconds
const executionTime = endTime - startTime;

console.log(`Execution time: ${executionTime} milliseconds`);


// console.log(trafficMap([[0, 2, 1], [5, 4, 0]])); //True
// console.log(trafficMap([[0, 2, 1], [5, 4, 1]])); //False
// console.log(trafficMap([[0, 2, 1], [5, 4, 2]])); //False
// console.log(trafficMap([[0, 0, 2], [5, 1, 4]])); //True
// console.log(trafficMap([[2, 0, 0], [4, 0, 0]])); //True

