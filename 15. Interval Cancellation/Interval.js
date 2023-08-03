/**
 * The cancellable function is a higher-order function that takes a function fn,
 * an array of arguments args, and a time interval t. It executes the fn
 * immediately with the given args, and then sets up an interval to repeatedly
 * call the fn with the same args every t milliseconds. It returns a cancel
 * function that can be used to stop the recurring calls.
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var cancellable = function (fn, args, t) {
  fn(...args);
  var timer = setInterval(() => fn(...args), t);

  var cancelFn = () => clearTimeout(timer);

  return cancelFn;
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1: Log a message every 1 second and cancel after 5 seconds.
function logMessage(message) {
  console.log(message);
}

const cancelLog = cancellable(logMessage, ["Hello, world!"], 1000);

// Log "Hello, world!" every second for 5 seconds
setTimeout(() => {
  cancelLog(); // Cancel the recurring calls
}, 5000);

// Example 2: Perform a task with arguments every 2 seconds and cancel after 10 seconds.
function performTask(task, a, b) {
  console.log(`Result: ${task(a, b)}`);
}

function add(a, b) {
  return a + b;
}

const cancelTask = cancellable(performTask, [add, 5, 10], 2000);

// Perform the task every 2 seconds for 10 seconds
setTimeout(() => {
  cancelTask(); // Cancel the recurring calls
}, 10000);

// Example 3: Alert a random number every 3 seconds and cancel after 15 seconds.
function showAlert(number) {
  console.log(number);
}

const cancelAlert = cancellable(showAlert, [Math.random()], 3000);

// Alert a random number every 3 seconds for 15 seconds
setTimeout(() => {
  cancelAlert(); // Cancel the recurring alerts
}, 15000);
