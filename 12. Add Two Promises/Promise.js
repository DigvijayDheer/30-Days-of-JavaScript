/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

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
