function mergeStrings(s1, s2) {
  const occurrencesS1 = countOccurrences(s1);
  const occurrencesS2 = countOccurrences(s2);

  let mergedResult = '';

  let i = 0, j = 0;

  while (i < s1.length && j < s2.length) {
    const charS1 = s1[i];
    const charS2 = s2[j];

    const countS1 = occurrencesS1[charS1] || 0;
    const countS2 = occurrencesS2[charS2] || 0;

    if (countS1 !== countS2) {
      mergedResult += (countS1 < countS2) ? charS1 : charS2;
      i += (countS1 < countS2) ? 1 : 0;
      j += (countS1 >= countS2) ? 1 : 0;
    } else {
      // If occurrences are equal, compare lexicographically
      mergedResult += (charS1 <= charS2) ? charS1 : charS2;
      i += (charS1 <= charS2) ? 1 : 0;
      j += (charS1 > charS2) ? 1 : 0;
    }
  }

  // Append the remaining characters from s1 and s2
  mergedResult += s1.slice(i) + s2.slice(j);

  return mergedResult;
}

function countOccurrences(str) {
  const occurrences = {};
  for (const char of str) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }
  return occurrences;
}

console.log(mergeStrings("dce", "cccbd"));
console.log(mergeStrings("super", "tower"));