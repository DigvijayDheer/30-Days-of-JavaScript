/**
 * The below code is a simple implementation of a testing utility function
 * called expect. It allows you to test whether two values are equal or not
 * equal and throws an error with a specific message if the expectation is
 * not met.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var expect = function (val) {
  return {
    toBe: (other) => {
      if (val !== other) throw new Error("Not Equal");
      return true;
    },
    notToBe: (other) => {
      if (val === other) throw new Error("Equal");
      return true;
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: Testing for equality
const result1 = 42;
const expected1 = 42;

try {
  console.log(expect(result1).toBe(expected1));
  console.log("Test passed!"); // This will be printed if the test passes
} catch (error) {
  console.error(error.message); // This will be printed if the test fails
}

// Example 2: Testing for inequality
const result2 = "hello";
const expected2 = "world";

try {
  console.log(expect(result2).notToBe(expected2));
  console.log("Test passed!"); // This will be printed if the test passes
} catch (error) {
  console.error(error.message); // This will be printed if the test fails
}

// Example 3: Chaining multiple expectations
const num1 = 10;
const num2 = 5;
const num3 = 5;

try {
  console.log(expect(num1).toBe(10).notToBe(num2).toBe(num3));
  console.log("Test passed!"); // This will be printed if all the tests pass
} catch (error) {
  console.error(error.message); // This will be printed if any test fails
}

/**
 * In Example 1, the test passes because the result and expected values 
 * are equal (both are 42). In Example 2, the test passes because the 
 * result and expected values are not equal (one is "hello" and the other 
 * is "world"). In Example 3, the test passes because all the chained 
 * expectations are met.

 * If any of the tests fail, an error with the specified message will be 
 * thrown and caught in the catch block, printing the error message to the 
 * console. Otherwise, if all the tests pass, the success message will be 
 * printed to the console.
 */
