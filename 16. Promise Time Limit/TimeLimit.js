/**
 * This program defines a function called timeLimit, which is a higher-order 
 * function that takes two parameters: fn and t. The fn parameter represents 
 * a function that will be executed, and the t parameter represents the time 
 * limit (in milliseconds) within which the fn function must complete. If the 
 * fn function takes longer than t milliseconds to complete, it will be 
 * interrupted and a rejection with the message "Time Limit Exceeded" will be 
 * returned.

 * The timeLimit function returns another function, which is an asynchronous 
 * function that takes an indefinite number of arguments represented by ...args. 
 * When this returned function is called, it invokes fn(...args) and setTimeout 
 * simultaneously. The Promise.race method is used to resolve with the first 
 * promise that either resolves or rejects. If fn(...args) completes within the 
 * given time limit, it will resolve with the result of fn. However, if fn takes 
 * longer than t milliseconds, the setTimeout promise will reject with the message 
 * "Time Limit Exceeded," effectively interrupting the execution of fn.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      }),
    ]);
  };
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: A simple synchronous function with a time limit

const add = (a, b) => a + b;

const timeLimitedAdd = timeLimit(add, 1000);

(async () => {
  try {
    const result = await timeLimitedAdd(3, 5); // This should complete within 1000 milliseconds
    console.log("Result:", result); // Output: Result: 8
  } catch (error) {
    console.error("Error:", error);
  }
})();

/**
 * In this example, we define a simple function add that adds two numbers.
 * We then use timeLimit to create a new function timeLimitedAdd, which has
 * a time limit of 1000 milliseconds. When we call timeLimitedAdd(3, 5),
 * it will execute the add function with the arguments 3 and 5. Since add is
 * a simple and quick function, it will complete within the time limit, and
 * the result will be printed.
 */

// Example 2: Asynchronous function with a time limit
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const timeLimitedDelay = timeLimit(delay, 2000);

(async () => {
  try {
    await timeLimitedDelay(3000); // This should exceed the time limit
    console.log("Delay completed successfully");
  } catch (error) {
    console.error("Error:", error); // Output: Error: Time Limit Exceeded
  }
})();

/**
 * In this example, we define an asynchronous function delay that resolves a
 * promise after a specified number of milliseconds. We then create a new
 * function timeLimitedDelay using timeLimit, with a time limit of 2000
 * milliseconds. When we call timeLimitedDelay(3000), it will try to wait for
 * 3000 milliseconds, which exceeds the time limit. As a result, the function
 * will reject with the message "Time Limit Exceeded."
 */
