

const directionBoxes = {
  0: [1, 3],
  1: [2, 4],
  2: [1, 4],
  3: [3, 4],
  4: [2, 3],
  5: [1, 2],
};
function trafficMap(directions) {
  let start = directions[0][0]; // starting position
  let end = directions[1][directions[1].length - 1]; // last position

  if ((start !== 0 && start !== 2) || (end !== 0 && end !== 4)) {
    console.log("False");
    return false;
  } else {
    let i = 0;
    let j = 0;

    while (i >= 0 && i < directions.length && j >= 0 && j < directions[0].length) {
      console.log(i, j);
      let values = directions[i][j];
      console.log("values", values);
      if (values === undefined) {
        break;
      }

      const [startPoint, endPoint] = directionBoxes[values];
      console.log("S,E", startPoint, endPoint);
      switch (endPoint) {
        case 1:
          j--;
          break;
        case 2:
          i--;
          break;
        case 3:
          j++;
          break;
        case 4:
          i++;
          break;
      }

      if (i === directions.length - 1 && j === directions[0].length - 1 && endPoint === 3) {
        console.log(true);
        return true;
      }

    }
    console.log(false);
    return false;
  }
}
console.log(trafficMap([[0, 2, 1], [5, 4, 0]]));





