# Interval Cancellation

Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.

The function `fn` should be called with `args` immediately and then called again every `t` milliseconds until `cancelFn` is called at `cancelT` ms.

### Example 1:

```js
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

### Example 2:

```js
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

### Example 3:

```js
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

## Constraints:

- `fn is a function`
- `args is a valid JSON array`
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelT <= 1000`

# SETINTERVAL IN JS

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
