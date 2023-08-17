# Sleep

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

#### Example 1:

```
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
console.log(Date.now() - t); // 100
});
```

#### Example 2:

```
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
```

#### Constraints:

- `1 <= millis <= 1000`

#### Hint:

1. In Javascript, you can execute code after some delay with the `setTimeout(fn, sleepTime)` function.
2. An async function is defined as function which returns a Promise.
3. To create a Promise, you can code `new Promise((resolve, reject) => {})`. When you want the function to return a value, code resolve(value) inside the callback.

## setTimeout() in JavaScript

`setTimeout` is a function in JavaScript used to schedule the execution of a function or the evaluation of an expression after a specified delay. It is commonly used to create delays, animations, or to execute code asynchronously without blocking the main thread. The syntax of `setTimeout` is as follows:

```javascript
setTimeout(function, delay, arg1, arg2, ...);
```

- `function`: The function or expression that will be executed after the specified delay.
- `delay`: The time (in milliseconds) that the function/expression should wait before being executed. This parameter is mandatory.
- `arg1, arg2, ...`: Optional arguments that can be passed to the function when it's executed.

Here's how `setTimeout` works:

1. When `setTimeout` is called, it sets up a timer to wait for the specified `delay`.
2. After the `delay` has elapsed, the specified function is added to the message queue.
3. When the main thread becomes idle (all synchronous code has been executed), the event loop picks up the function from the message queue and executes it.

**Example 1:** Simple setTimeout function without arguments:

```javascript
console.log("Start");

setTimeout(function () {
  console.log("Delayed function executed after 1000ms");
}, 1000);

console.log("End");
```

**Output:**

```
Start
End
Delayed function executed after 1000ms
```

In this example, `"Start"` and `"End"` will be printed first, and then the `"Delayed function executed after 1000ms"` message will appear after a 1000ms delay.

**Example 2:** Using setTimeout with arguments:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "John");
```

**Output:**

```
Hello, John!
```

In this example, the `greet` function is executed after a 2000ms delay, and the `"Hello, John!"` message is printed.

**Example 3:** Cancelling a setTimeout using clearTimeout:

```javascript
function delayedFunction() {
  console.log("This won't be executed.");
}

const timeoutId = setTimeout(delayedFunction, 1000);

clearTimeout(timeoutId); // The function won't be executed
```

In this example, we use `clearTimeout` to cancel the execution of the `delayedFunction`, preventing it from being added to the message queue.

> **Note:** The actual delay before execution may vary slightly depending on the current system load and other factors. The browser or Node.js environment handles the timing for `setTimeout`.

Keep in mind that `setTimeout` doesn't guarantee the exact time of execution, as it depends on the event loop's availability. For more precise timing, you should consider using `requestAnimationFrame` or other methods depending on your use case.
