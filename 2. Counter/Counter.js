/*
 * In JavaScript, you can create a counter using variables and functions.
 * A counter is a simple mechanism that keeps track of a numeric value and
 * allows you to increment or decrement it.
 */

/**
 * The code below is an example of a closure in JavaScript. It creates a
 * function called createCounter that takes an initial value n and returns
 * another function (an inner function) that acts as a counter. Every time
 * the inner function is called, it increments the counter by one and
 * returns the updated value.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var createCounter = (n) => {
  var counter = n;
  return () => counter++;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Create a counter starting from 5
var counterFive = createCounter(5);

// Call the counter function multiple times to see how it increments
console.log(counterFive()); // Output: 5 (initial value)
console.log(counterFive()); // Output: 6
console.log(counterFive()); // Output: 7

// Create another counter starting from 10
var counterTen = createCounter(10);

// Call the second counter function to see how it increments independently
console.log(counterTen()); // Output: 10 (initial value)
console.log(counterTen()); // Output: 11
console.log(counterTen()); // Output: 12

// Call the first counter again, it will continue from where it left off
console.log(counterFive()); // Output: 8
console.log(counterFive()); // Output: 9

/**
 * In this example, we create two independent counters, counterFive and
 * counterTen, both using the createCounter function. Each counter
 * maintains its own internal state (the counter variable) due to the
 * closure, allowing them to increment independently of each other.
 */
