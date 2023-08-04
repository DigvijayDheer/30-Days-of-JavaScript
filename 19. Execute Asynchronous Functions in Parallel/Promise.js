/**===================================================================== */
// CODE
/**===================================================================== */

var promiseAll = async function (functions) {
  try {
    // Flatten the nested array of functions and execute all promises in parallel
    const promises = functions.flat().map((f) => f());

    // Wait for all promises to resolve or reject using Promise.all
    const results = await Promise.all(promises);

    // Filter out any null results from resolved promises
    const filteredResults = results.filter((result) => result !== null);

    // Return the filtered results as the resolved value of the main promise
    return filteredResults;
  } catch (error) {
    // If any promise rejects, propagate the rejection by throwing the error
    throw error;
  }
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: Resolving Multiple Promises
// Example with multiple promises resolving
const functions4 = [
  () => new Promise((resolve) => setTimeout(() => resolve(10), 100)),
  () => new Promise((resolve) => setTimeout(() => resolve(20), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(30), 200)),
];

promiseAll(functions4).then((results) => {
  console.log(results); // Output: [10, 20, 30]
});

/**
 * In this example, we have three functions that return promises. The promises
 * resolve at different intervals (50ms, 100ms, and 200ms), and the promiseAll
 * function waits for all of them to complete. The resolved values are then
 * returned in the order they appear in the original functions array.
 */

// Example 2: Rejection with First Error
// Example with one promise rejecting and others resolving
const functions5 = [
  () => new Promise((resolve) => setTimeout(() => resolve(10), 100)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(30), 200)),
];

promiseAll(functions5).catch((error) => {
  console.log(error); // Output: "Error 1"
});

/**
 * In this example, we have three functions again, but the second one rejects
 * with an error after 50ms. The promiseAll function catches the rejection and
 * propagates it, causing the main promise to be rejected with the first
 * encountered error.
 */

// Example 3: Nested Arrays of Functions
// Example with nested arrays of functions
const functions6 = [
  [
    () => new Promise((resolve) => setTimeout(() => resolve(100), 200)),
    () => new Promise((resolve) => setTimeout(() => resolve(200), 100)),
  ],
  () => new Promise((resolve) => setTimeout(() => resolve(300), 150)),
  [
    () => new Promise((resolve) => setTimeout(() => resolve(400), 50)),
    () => new Promise((resolve) => setTimeout(() => resolve(500), 300)),
  ],
];

promiseAll(functions6).then((results) => {
  console.log(results); // Output: [100, 200, 300, 400, 500]
});

/**
 * In this example, we have nested arrays of functions, and each inner array
 * is processed concurrently. The inner promises resolve at different intervals,
 *  and the outer array waits for all inner promises to complete. The resolved
 * values are then returned as a single flat array in the order they appear in
 * the original functions array.
 */
