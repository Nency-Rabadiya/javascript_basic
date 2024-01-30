function findTheTriples(arr, queries) {
  function countOccurrences(triple) {
    const [x, y, z] = triple;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] === y) {
            for (let k = j + 1; k < arr.length; k++) {
              if (arr[k] === z) {
                count += 1;
              }
            }
          }
        }
      }
    }
    return count;
  }

  const result = [];
  for (const query of queries) {
    result.push(countOccurrences(query));
  }
  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const queries1 = [[1, 2, 4], [2, 4, 3], [1, 1, 1]];
const result1 = findTheTriples(arr1, queries1);
console.log(result1);  // Output: [1, 0, 0]

const arr2 = [1, 2, 2, 1, 2, 1, 2];
const queries2 = [[1, 1, 2], [1, 2, 1]];
const result2 = findTheTriples(arr2, queries2);
console.log(result2);  // Output: [4, 6]

const arr3 = [1, 1, 1, 1];
const queries3 = [[1, 1, 1]];
const result3 = findTheTriples(arr3, queries3);
console.log(result3);  // Output: [4]