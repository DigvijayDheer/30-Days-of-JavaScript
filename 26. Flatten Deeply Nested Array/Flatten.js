/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

const flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }
  let res = [];
  flatRecursive(arr, n, res);
  return res;
};

const flatRecursive = (arr, n, res) => {
  for (const element of arr) {
    if (Array.isArray(element) && n > 0) {
      flatRecursive(element, n - 1, res);
      continue;
    }
    res.push(element);
  }
};

// Example 1:
const sampleArray1 = [1, [2, 3], [4, [5, 6]]];
const result1 = flat(sampleArray1, 1);
console.log(result1);
// Output: [1, 2, 3, [4, [5, 6]]]

// Example 2:
const sampleArray2 = [
  1,
  2,
  3,
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
const result2 = flat(sampleArray2, 0);
console.log(result2);
// Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

// Example 3:
const sampleArray3 = [
  1,
  2,
  3,
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
const result3 = flat(sampleArray3, 1);
console.log(result3);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

// Example 4:
const sampleArray4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
const result4 = flat(sampleArray4, 2);
console.log(result4);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
