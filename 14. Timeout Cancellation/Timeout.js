/**===================================================================== */
// CODE
/**===================================================================== */

var cancellable = function (fn, args, t) {
  var timer = setTimeout(() => {
    fn(...args);
  }, t);

  var cancelFn = () => {
    clearTimeout(timer);
  };

  return cancelFn;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Test Case 1: Basic Function Call
function sampleFunction(message) {
  console.log("Function executed:", message);
}
const sampleCancelFunction = cancellable(
  sampleFunction,
  ["Hello, World!"],
  1000
);
// Wait for 500ms and then cancel the function
setTimeout(sampleCancelFunction, 500);
// Expected Output (after 500ms): Nothing should be logged because the function call is canceled before it executes.

// Test Case 2: Function with Delayed Execution
function delayedFunction(message) {
  console.log("Delayed function executed:", message);
}
const delayedCancelFunction = cancellable(
  delayedFunction,
  ["Delayed Hello!"],
  2000
);
// Wait for 3 seconds, the function should execute before being canceled
setTimeout(delayedCancelFunction, 3000);
// Expected Output (after 2 seconds): "Delayed function executed: Delayed Hello!"

// Test Case 3: Function with Multiple Arguments
function addNumbers(a, b) {
  console.log("Sum:", a + b);
}
const addNumbersCancelFunction = cancellable(addNumbers, [5, 7], 1000);
// Wait for 500ms and then cancel the function
setTimeout(addNumbersCancelFunction, 500);
// Expected Output (after 500ms): Nothing should be logged because the function call is canceled before it executes.

// Test Case 4: Function with Longer Delay
function longRunningFunction() {
  console.log("Long-running function executed");
}
const longRunningCancelFunction = cancellable(longRunningFunction, [], 5000);
// Wait for 3 seconds, then cancel the function
setTimeout(longRunningCancelFunction, 3000);
// Expected Output (after 3 seconds): Nothing should be logged because the function call is canceled before it executes.

// Test Case 5: Function with Immediate Execution
function immediateFunction() {
  console.log("Immediate function executed");
}
const immediateCancelFunction = cancellable(immediateFunction, [], 0);
// Cancel the function immediately
immediateCancelFunction();
// Expected Output: Nothing should be logged because the function call is canceled immediately without any delay.
