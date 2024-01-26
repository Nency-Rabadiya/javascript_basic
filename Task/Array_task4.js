function checkLength(arr) {
  if (arr.length % 2 !== 0) {
    return [];
  }

  const occurence = {};
  for (const num of arr) {
    occurence[num] = (occurence[num] || 0) + 1;
    if (occurence[num] > 2) {
      return [];
    }
  }

  const arr1 = [];
  const arr2 = [];
  const occurence2 = {};
  for (const num of arr) {
    if (occurence[num] === 2 && !occurence2[num]) {
      arr1.push(num);
      arr2.push(num);
      occurence2[num] = true;
    }
  }

  for (const num of arr) {
    if (occurence[num] === 1) {
      if (arr1.length < arr.length / 2) {
        arr1.push(num);
      } else {
        arr2.push(num);
      }
    }
  }
  return [arr1, arr2];
}

const result1 = checkLength([2, 1, 2, 3, 3, 4]);
console.log('result of [2, 1, 2, 3, 3, 4] = ', result1);

const result2 = checkLength([1, 2, 2, 1]);
console.log('result is [1, 2, 2, 1] = ', result2);

const result3 = checkLength([1, 2, 2, 1, 5]);
console.log('result is [1, 2, 2, 1, 5] = ', result3);

const result4 = checkLength([2, 2, 3, 3, 2, 2]);
console.log('result is [2, 2, 3, 3, 2, 2] = ', result4);
