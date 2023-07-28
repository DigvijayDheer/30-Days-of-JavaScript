/**
 * The function `addTwoPromises` is an asynchronous function that takes in two promises (`promise1` and `promise2`) as its parameters and returns a new promise that resolves to the sum of the values resolved by those two input promises.
 * Here's a breakdown of what the function does:
 * 1. It is defined as an `async` function, which means it can use the `await` keyword to handle promises in a synchronous-like manner.
 * 2. Inside the function, a `try-catch` block is used to handle any potential errors that may occur during the execution of the promises.
 * 3. It uses `Promise.all` to wait for both `promise1` and `promise2` to resolve. This means that it will wait until both promises have resolved successfully, or one of them rejects with an error.
 * 4. Once both promises have resolved successfully, the results of the promises are extracted into the variables `result1` and `result2`.
 * 5. The function returns the sum of `result1` and `result2`, which is effectively the result of adding the values resolved by the two input promises.
 * 6. If any of the promises rejects during the execution (an error occurs), the `catch` block will be triggered. In this case, the function will return the caught error.
 * The key point of this function is that it allows you to add the values of two promises together in an asynchronous manner. By using `await` and `Promise.all`, it ensures that both promises are resolved before performing the addition operation. The use of `async` and `await` makes the code more readable and easier to work with when dealing with asynchronous operations in JavaScript.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var addTwoPromises = async function (promise1, promise2) {
  try {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    return result1 + result2;
  } catch (error) {
    return error;
  }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Test Case 1: Adding Two Numbers
const promise1_1 = Promise.resolve(5);
const promise1_2 = Promise.resolve(10);

addTwoPromises(promise1_1, promise1_2)
  .then((result) => {
    console.log(result); // Expected output: 15
  })
  .catch((error) => {
    console.error(error); // Not expected to be triggered
  });

// Test Case 2: Adding Two Numbers (One Promise Rejected)
const promise2_1 = Promise.resolve(5);
const promise2_2 = Promise.reject("An error occurred!");

addTwoPromises(promise2_1, promise2_2)
  .then((result) => {
    console.log(result); // Not expected to be triggered
  })
  .catch((error) => {
    console.error(error); // Expected output: "An error occurred!"
  });

// Test Case 3: Adding Two Numbers (Both Promises Rejected)
const promise3_1 = Promise.reject("Error 1");
const promise3_2 = Promise.reject("Error 2");

addTwoPromises(promise3_1, promise3_2)
  .then((result) => {
    console.log(result); // Not expected to be triggered
  })
  .catch((error) => {
    console.error(error); // Expected output: "Error 1" (Only the first error is caught)
  });

// Test Case 4: Adding Two Strings
const promise4_1 = Promise.resolve("Hello, ");
const promise4_2 = Promise.resolve("World!");

addTwoPromises(promise4_1, promise4_2)
  .then((result) => {
    console.log(result); // Expected output: "Hello, World!"
  })
  .catch((error) => {
    console.error(error); // Not expected to be triggered
  });

// Test Case 5: Adding Different Data Types (One Promise Resolves with Number, One with String)
const promise5_1 = Promise.resolve(5);
const promise5_2 = Promise.resolve("10");

addTwoPromises(promise5_1, promise5_2)
  .then((result) => {
    console.log(result); // Expected output: "510" (concatenation of string and number)
  })
  .catch((error) => {
    console.error(error); // Not expected to be triggered
  });
