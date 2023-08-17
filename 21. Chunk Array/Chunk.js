/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

var chunk = function (arr, size) {
  const chunkArray = [];
  let chunk = [];
  let chunkIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    chunk[chunkIndex++] = arr[i];

    if (chunkIndex === size || i === arr.length - 1) {
      chunkArray[chunkArray.length] = chunk;
      chunk = [];
      chunkIndex = 0;
    }
  }

  return chunkArray;
};

// Example 1: Splitting an array of numbers into chunks of size 3.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize1 = 3;
const result1 = chunk(numbers, chunkSize1);
console.log(result1);
// Output: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

// Example 2: Splitting an array of strings into chunks of size 2.
const words = ["apple", "banana", "cherry", "date", "grape", "kiwi"];
const chunkSize2 = 2;
const result2 = chunk(words, chunkSize2);
console.log(result2);
// Output: [ ["apple", "banana"], ["cherry", "date"], ["grape", "kiwi"] ]

// Example 3: Splitting an array into chunks with the last chunk containing the remaining elements.
const data = [10, 20, 30, 40, 50, 60];
const chunkSize3 = 2;
const result3 = chunk(data, chunkSize3);
console.log(result3);
// Output: [ [10, 20], [30, 40], [50, 60] ]

// Example 4: Splitting a larger array into smaller chunks.
const longArray = Array.from({ length: 15 }, (_, i) => i + 1); // [1, 2, ..., 15]
const chunkSize4 = 4;
const result4 = chunk(longArray, chunkSize4);
console.log(result4);
// Output: [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15] ]
