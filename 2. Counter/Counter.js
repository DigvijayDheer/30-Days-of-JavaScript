/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = (n) => {
  var counter = n;
  return () => counter++;
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Example 1: Create a counter starting from 5
var counterFive = createCounter(5);

// Call the counter function multiple times to see how it increments
console.log(counterFive()); // Output: 5 (initial value)
console.log(counterFive()); // Output: 6
console.log(counterFive()); // Output: 7

// Example 2: Create another counter starting from 10
var counterTen = createCounter(10);

// Call the second counter function to see how it increments independently
console.log(counterTen()); // Output: 10 (initial value)
console.log(counterTen()); // Output: 11
console.log(counterTen()); // Output: 12

// Call the first counter again, it will continue from where it left off
console.log(counterFive()); // Output: 8
console.log(counterFive()); // Output: 9
