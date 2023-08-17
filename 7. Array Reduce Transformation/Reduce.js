/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  if (!nums.length) return init;
  let res = init;

  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }

  return res;
};

// Example 1: Summing up an array of numbers
const array = [1, 2, 3, 4, 5];

const sum = reduce(
  array,
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Example 2: Calculating the product of an array of numbers
const numbers = [2, 3, 4, 5];

const product = reduce(
  numbers,
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(product); // Output: 120 (2 * 3 * 4 * 5)

// Example 3: Concatenating strings in an array
const words = ["Hello", " ", "World", "!"];

const result = reduce(
  words,
  (accumulator, currentValue) => accumulator + currentValue,
  ""
);
console.log(result); // Output: "Hello World!"

// Example 4: Finding the maximum value in an array of numbers
const arr = [10, 5, 25, 30, 15];

const max = reduce(
  arr,
  (accumulator, currentValue) => Math.max(accumulator, currentValue),
  numbers[0]
);
console.log(max); // Output: 30 (The largest number in the array)

// Example 5: Counting occurrences of elements in an array
const fruits = ["apple", "banana", "orange", "apple", "apple", "banana"];

const counts = reduce(
  fruits,
  (accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  },
  {}
);

console.log(counts);
// Output: { apple: 3, banana: 2, orange: 1 }
