/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

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

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

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
