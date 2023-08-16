/**
 * @param {string} val
 * @return {Object}
 */

var createCounter = function (init) {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => (currentCount = init),
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Example 1:
const counter1 = createCounter(5);

console.log(counter1.increment()); // Output: 6
console.log(counter1.increment()); // Output: 7
console.log(counter1.increment()); // Output: 8

console.log(counter1.decrement()); // Output: 7
console.log(counter1.decrement()); // Output: 6

counter1.reset();
console.log(counter1.increment()); // Output: 6

// Example 2:
const counter2 = createCounter(10);

console.log(counter2.increment()); // Output: 11
console.log(counter2.increment()); // Output: 12
console.log(counter2.increment()); // Output: 13

console.log(counter2.decrement()); // Output: 12

counter2.reset();
console.log(counter2.increment()); // Output: 10

// Example 3:
const counter3 = createCounter(-2);

console.log(counter3.increment()); // Output: -1
console.log(counter3.increment()); // Output: 0

console.log(counter3.decrement()); // Output: -1
console.log(counter3.decrement()); // Output: -2

counter3.reset();
console.log(counter3.increment()); // Output: -2
