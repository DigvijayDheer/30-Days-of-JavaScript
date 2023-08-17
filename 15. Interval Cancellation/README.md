# Interval Cancellation

Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.

The function `fn` should be called with `args` immediately and then called again every `t` milliseconds until `cancelFn` is called at `cancelT` ms.

#### Example 1:

```
Input: fn = (x) => x * 2, args = [4], t = 20, cancelT = 110
Output:
[
   {"time": 0, "returned": 8},
   {"time": 20, "returned": 8},
   {"time": 40, "returned": 8},
   {"time": 60, "returned": 8},
   {"time": 80, "returned": 8},
   {"time": 100, "returned": 8}
]
Explanation:
const cancel = cancellable(x => x * 2, [4], 20);
setTimeout(cancel, 110);

Every 20ms, fn(4) is called. Until t=110ms, then it is cancelled.
1st fn call is at 0ms. fn(4) returns 8.
2nd fn call is at 20ms. fn(4) returns 8.
3rd fn call is at 40ms. fn(4) returns 8.
4th fn call is at 60ms. fn(4) returns 8.
5th fn call is at 80ms. fn(4) returns 8.
6th fn call is at 100ms. fn(4) returns 8.
Cancelled at 110ms
```

#### Example 2:

```
Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 25, cancelT = 140
Output:
[
   {"time": 0, "returned": 10},
   {"time": 25, "returned": 10},
   {"time": 50, "returned": 10},
   {"time": 75, "returned": 10},
   {"time": 100, "returned": 10},
   {"time": 125, "returned": 10}
]
Explanation:
const cancel = cancellable((x1, x2) => (x1 * x2), [2, 5], 25);
setTimeout(cancel, 140);

Every 25ms, fn(2, 5) is called. Until t=140ms, then it is cancelled.
1st fn call is at 0ms
2nd fn call is at 25ms
3rd fn call is at 50ms
4th fn call is at 75ms
5th fn call is at 100ms
6th fn call is at 125ms
Cancelled at 140ms
```

#### Example 3:

```
Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50, cancelT = 180
Output:
[
   {"time": 0, "returned": 9},
   {"time": 50, "returned": 9},
   {"time": 100, "returned": 9},
   {"time": 150, "returned": 9}
]
Explanation:
const cancel = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);
setTimeout(cancel, 180);

Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.
1st fn call is at 0ms
2nd fn call is at 50ms
3rd fn call is at 100ms
4th fn call is at 150ms
Cancelled at 180ms
```

#### Constraints:

- `fn is a function`
- `args is a valid JSON array`
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelT <= 1000`

## setInterval() in JavaScript

`setInterval` is a built-in function in JavaScript that repeatedly executes a given function or code block at a specified time interval. It is commonly used for animations, timers, and other tasks that require periodic execution. The syntax for `setInterval` is as follows:

```javascript
setInterval(function, delay[, arg1, arg2, ...]);
```

Here's a detailed explanation of the parameters:

1. `function`: This is the function that you want to execute repeatedly. It can be a reference to an existing function or an inline function declaration.

2. `delay`: This is the time interval (in milliseconds) between each execution of the `function`. The value of `delay` determines how often the `function` is called. For example, if `delay` is set to 1000, the function will be executed every 1000 milliseconds (1 second).

3. `arg1, arg2, ...`: (Optional) Additional arguments that you want to pass to the `function`. These arguments are passed as separate parameters after the `delay`.

Here's an example to illustrate the usage of `setInterval`:

```javascript
// Example 1: Simple setInterval with an anonymous function
let count = 0;

const intervalId = setInterval(function () {
  count++;
  console.log(`Interval executed! Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Stop the interval after 5 executions
    console.log("Interval stopped.");
  }
}, 1000);
```

In this example, we create a simple interval that increments the `count` variable and prints its value to the console every 1000 milliseconds (1 second). The interval will stop after `count` reaches 5, using `clearInterval`.

```javascript
// Example 2: Using setInterval with an existing function and arguments
function greet(name) {
  console.log(`Hello, ${name}!`);
}

const names = ["Alice", "Bob", "Charlie"];
let index = 0;

const intervalId = setInterval(greet, 2000, names[index]);

index++;
if (index === names.length) {
  clearInterval(intervalId); // Stop the interval after all names are greeted
  console.log("Greeting completed.");
}
```

In this example, we use an existing `greet` function to greet each person's name in the `names` array. The interval is set to 2000 milliseconds (2 seconds). We use the `index` variable to keep track of the current name being greeted, and when all names are greeted, we stop the interval using `clearInterval`.

Remember that `setInterval` continues executing the function until it is explicitly stopped using `clearInterval` or if the page is closed or refreshed. Therefore, it's essential to manage the intervals properly to avoid unnecessary or unintended repetitive actions in your application.

Certainly! `setInterval` is a core part of JavaScript's built-in timer functions and is widely used for creating timed and repetitive tasks in web applications. Here are some additional details about `setInterval`:

1. Asynchronous Execution: `setInterval` works asynchronously, meaning it does not block the rest of the code execution. Once you set an interval, the code continues to run, and the function specified in `setInterval` is called in the background at the specified time intervals.

2. Multiple Intervals: You can have multiple `setInterval` calls running simultaneously. Each call creates its own separate interval and runs independently.

3. Timing Accuracy: While the interval value (delay) you provide determines the minimum time between executions, it's important to note that JavaScript's timers are not perfectly accurate. Delays can be influenced by other processes running on the page and the system's resources. In scenarios where exact timing is crucial, other techniques or APIs should be considered.

4. Nested Calls: Be cautious when using `setInterval` in combination with functions that might take longer to execute than the interval itself. If the interval time is shorter than the execution time of the function, it might lead to overlapping calls, causing unintended behavior or performance issues.

5. Clearing Intervals: To stop the interval and prevent further execution of the specified function, you can use the `clearInterval` function. You need to pass the interval ID returned by `setInterval` as an argument to `clearInterval`.

6. Best Practices: While `setInterval` is a useful tool, it's essential to use it judiciously to prevent performance problems in your application. Be mindful of the intervals you set, and always clear the intervals when they are no longer needed to avoid unnecessary resource consumption.

Here's an example that demonstrates how to use `setInterval` to create a countdown timer:

```javascript
let count = 10;

const intervalId = setInterval(function () {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(intervalId);
    console.log("Timer finished!");
  }
}, 1000);
```

In this example, the interval executes every second, decreasing the `count` variable until it reaches 0. Once the count reaches 0, the interval is cleared, and the timer is considered finished.

`setInterval` is a powerful tool, but it's essential to use it wisely to ensure your application remains performant and free from unwanted side effects.

## Solution

### Overview:

You are given a function `fn`, an array of arguments `args`, and an interval time `t`. You need to implement a function `cancelFn` that calls `fn` immediately with `args` and then schedules subsequent calls to `fn` every `t` milliseconds until `cancelFn` is called.

### Use Cases:

- **Auto-Saving in Editing Applications:** When working with text editors, document processors, or other content creation tools, it's common to have an auto-save feature that periodically saves changes. You can use interval cancellation to schedule auto-saving at regular intervals. If the user explicitly saves the document or exits the application, you can cancel the interval to prevent unnecessary saving operations.
- **Animation and Slideshow Timings:** While doing development, you may want to create animations or slideshows that automatically transition between different states or images. You can use interval cancellation to control the timing of these transitions. If the user interacts with the animation or slideshow, you can cancel the interval to pause or stop the automatic progression.

> Note: For more complex or performance-critical animations, it's recommended to use the `requestAnimationFrame` method instead of `setInterval`, as it provides better performance and efficiency.

- **Time-based Reminders:** Consider a task management application where users can set reminders for specific tasks. You can use interval cancellation to trigger reminders at specified intervals. Once the user acknowledges the reminder or the task is completed, you can cancel the interval to stop further reminders.

Before going any further we need to learn two concepts i.e `setInterval` and `clearInterval`.

1.  **setInterval:**  
    The `setInterval` function is used to repeatedly execute a function or a code snippet with a fixed time delay between each call. It takes two arguments: the function or code snippet to be executed, and the time delay specified in milliseconds.

```javascript
setInterval(function, delay);
```

- The `function` parameter represents the function or code snippet that will be executed at each interval.
- The `delay` parameter specifies the time delay in milliseconds between each execution of the function.

When `setInterval` is called, it schedules the first execution of the specified function after the initial delay. Subsequent executions will occur repeatedly based on the specified delay.  
`setInterval` returns an interval ID, which is a unique numeric value. This ID can be used later to identify and control the interval schedule. Also just a note that `setInterval` is not totally precise.

1.  **clearInterval:**  
    The `clearInterval` function is used to cancel a timed, repeating action that was previously established by a call to `setInterval`. It takes the interval ID returned by `setInterval` as an argument.

```javascript
clearInterval(intervalID);
```

- The `intervalID` parameter represents the unique ID returned by the `setInterval` function when the interval was created.  
  By calling `clearInterval` with the appropriate interval ID, you can effectively stop the subsequent executions of the function specified in `setInterval`. It cancels the scheduled interval and prevents any further calls to the specified function.

## Approach 1: Using setInterval & clearInterval

To set an interval timer, we use the `setInterval` function. In the code snippet below, `setInterval` will repeatedly call `() => fn(...args)` every `t` milliseconds. It's important to note that `setInterval` does not immediately call the function before `t` milliseconds, which is why we manually call `fn(...args)` once before setting the interval.

Next, we define a function called `cancelFn` that clears the interval when it's called. We return `cancelFn` from the main function. It's worth mentioning that `cancelFn` is not called when our `cancellable` function is initially defined. However, whenever the `cancellable` function is called, it returns `cancelFn`. The `cancelFn` can then be called at a later time to clear the interval.

### Implementation:

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);

  const cancelFn = () => clearInterval(timer);
  return cancelFn;
};
```

### Complexity Analysis:

- **Time complexity:** O(1)
- **Space complexity:** O(1)

## Approach 2: Using Recursion

### Intuition:

We can set up a timed interval where the function is repeatedly executed. This will provide a way to cancel the interval execution when desired. In a more simpler words each function will keep calling itself (after `t` ms, via a `timeout`), as long as the boolean flag is not flipped.

### Algorithm:

When we call the `cancellable` function, it first executes the provided function `(fn)` with the given arguments `(args)` i.e `(fn(...args))`. This ensures that the function is called at least once before we start the interval.

Next, we define an internal function called `startInterval`. This function will be held for setting up the interval by using `setTimeout`. It waits for the specified `t` and then executes the function `(fn)` again. It repeats this process until we decide to cancel the interval which will be decided by the boolean `isCancelled` that we declared in the start of the code.

To create this repeated execution, `startInterval` uses a clever trick. It calls itself recursively within the `setTimeout` callback function. This means that after each execution of the function, it schedules the next execution by calling `startInterval` again. This creates a loop-like behavior where the function is executed, and then `startInterval` is called again to schedule the next execution.

### Implementation 1:

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let isCancelled = false;
  fn(...args);
  const startInterval = () => {
    setTimeout(() => {
      fn(...args);
      if (isCancelled) return;
      startInterval();
    }, t);
  };
  startInterval();
  const cancelInterval = () => {
    isCancelled = true;
  };

  return cancelInterval;
};
```

### Implementation 2:

Implementation 1 is good, but it's more efficient to use `clearTimeout` to clear those recursive timeouts, this approach ensures that the callback isn't called unnecessarily:

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let timerId = null;
  fn(...args);

  const startInterval = () => {
    timerId = setTimeout(() => {
      fn(...args);
      startInterval();
    }, t);
  };
  startInterval();

  const cancelInterval = () => {
    if (timerId !== null) {
      // not totally needed as clearTimeout is very forgiving fn
      clearTimeout(timerId);
    }
  };

  return cancelInterval;
};
```

### Complexity Analysis:

In the given implementations , the execution involves setting a `setTimeout` function with a delay of `t` milliseconds. However, it's important to note that the scheduling of the function call does not introduce recursion or affect the complexity in terms of the JavaScript engine's memory usage.

Let's dig a little deeper:

- The JavaScript engine initializes and creates the context for the `cancellable` function.
- The statements of the `cancellable` function, including the `setTimeout` call, are executed.
- The `setTimeout` function instructs the JavaScript engine to schedule a function call after a delay of `t` milliseconds.
- The context of the `cancellable` function is destroyed, and the JavaScript engine continues with other operations.
- At this point, in terms of memory usage, the JavaScript engine returns to its initial state without any additional memory allocation or recursion. The only remaining information is a reference to the function and the scheduled time for the future call.
- After the specified delay, the JavaScript engine executes the scheduled function without any impact on memory usage or recursion.
- Once the function execution is completed, any remaining references or data related to the scheduled call are cleared.

Considering this sequence of events, we can conclude that the complexity of this code, is constant `O(1)`. The memory utilization does not grow with the duration of the delay, and there is no recursion or memory buildup as the JavaScript engine handles the scheduling and execution of the function independently.

- **Time complexity:** O(1)
- **Space complexity:** O(1)

## Interview Tips:

- Can the interval time be dynamically changed after it has been set?
  - Yes, the interval time can be dynamically changed by canceling the existing interval using `clearInterval` and then setting a new interval using `setInterval` with the updated time. This allows you to adjust the timing dynamically based on changing requirements or user interactions.

> Note: While it's true that you can create the illusion of a dynamic interval by clearing and resetting it, it's important to note that this doesn't truly change the original interval time dynamically. It rather cancels the previous interval and starts a new one.

- Are there any limitations or performance considerations to keep in mind when using interval cancellation?

  - When working with interval cancellation, it's important to consider the interval time and the potential impact on performance. Frequent and short intervals can consume significant CPU resources. Additionally, if the execution time of the `fn` function is longer than the interval time, the subsequent calls may overlap, leading to unexpected behavior. It's crucial to ensure the interval time and the execution time of `fn` are appropriately balanced. That's why in some situations it is highly recommended to use something else like `requestAnimationFrame`.
  - The `requestAnimationFrame` accepts a single parameter, a function to execute. When the browser is ready to repaint the screen, the function you specify to `requestAnimationFrame` will be called. When this function runs, it depends on the CPU power of the computer executing the code, the refresh rate of the display the browser is on, and a few other criteria to guarantee the animation is as smooth as possible while taking as little resources as feasible.

- What happens if the interval time `(t)` is set to a negative value or zero?

  - It is going to execute immediately and continuously and will keep repeating for 0 or negative nums, potentially blocking the main thread and causing the browser to become unresponsive.

- Is it possible to restart or reschedule the interval after it has been canceled?

  - While you can't directly restart a canceled interval, you can create a new interval by calling setInterval again with the desired interval time and the function to be executed.
