/**
 * The code defines a map function that takes an array (arr) and a callback
 * function (fn). It applies the callback function to each element of the
 * array and creates a new array containing the results.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var map = function (arr, fn) {
  var returnedArray = [];
  for (var i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: Squaring the elements of an array
function square(num) {
  return num * num;
}

const numbersArr = [1, 2, 3, 4, 5];
const squaredNumbers = map(numbersArr, square);
console.log(squaredNumbers);
// Output: squaredNumbers = [1, 4, 9, 16, 25]

// Example 2: Doubling each element of an array
function double(num) {
  return num * 2;
}

const numbers = [2, 4, 6, 8, 10];
const doubledNumbers = map(numbers, double);
console.log(doubledNumbers);
// Output: doubledNumbers = [4, 8, 12, 16, 20]

// Example 3: Converting strings to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}

const names = ["alice", "bob", "charlie"];
const uppercaseNames = map(names, toUpperCase);
console.log(uppercaseNames);
// Output: uppercaseNames = ["ALICE", "BOB", "CHARLIE"]

// Example 4: Returning the index of each element
function getIndex(_, index) {
  return index;
}

const fruits = ["apple", "banana", "orange", "grape"];
const indices = map(fruits, getIndex);
console.log(indices);
// Output: indices = [0, 1, 2, 3]

// Example 5: Using a custom callback function
function customFunction(element, index) {
  return `Element at index ${index} is ${element}`;
}

const arr = ["one", "two", "three"];
const customResult = map(arr, customFunction);
console.log(customResult);
// Output: customResult = ["Element at index 0 is one", "Element at index 1 is two", "Element at index 2 is three"]
