/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  fn(...args);
  var timer = setInterval(() => fn(...args), t);

  var cancelFn = () => clearTimeout(timer);

  return cancelFn;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 20, cancelT = 110
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":20,"returned":8},
 *                         //      {"time":40,"returned":8},
 *                         //      {"time":60,"returned":8},
 *                         //      {"time":80,"returned":8},
 *                         //      {"time":100,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)
 */

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
