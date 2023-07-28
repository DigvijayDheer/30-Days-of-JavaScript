# Sleep

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

### Example 1:

```javascript
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
console.log(Date.now() - t); // 100
});
```

### Example 2:

```javascript
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
```

## Constraints:

- `1 <= millis <= 1000`

### Hint:

1. In Javascript, you can execute code after some delay with the `setTimeout(fn, sleepTime)` function.
2. An async function is defined as function which returns a Promise.
3. To create a Promise, you can code `new Promise((resolve, reject) => {})`. When you want the function to return a value, code resolve(value) inside the callback.

# TIMER FUNCTIONS IN JS

In JavaScript, there are several time-related functions available, both in normal (synchronous) functions and asynchronous functions using `async/await`. Below, I'll provide examples of some common time-related functions in both types of functions.

**Normal (Synchronous) Functions:**

1. `setTimeout`: Executes a function after a specified delay (in milliseconds).

```javascript
function normalFunctionTimeout() {
  console.log("This message will be delayed by 2 seconds.");
}

setTimeout(normalFunctionTimeout, 2000);
```

2. `setInterval`: Repeatedly executes a function at a specified interval (in milliseconds).

```javascript
function normalFunctionInterval() {
  console.log("This message will be displayed every 3 seconds.");
}

setInterval(normalFunctionInterval, 3000);
```

**Async Functions (using `async/await`):**

1. `setTimeout` with Async/Await: Use `setTimeout` inside an async function using `await`.

```javascript
async function asyncFunctionTimeout() {
  console.log(
    "This message will be delayed by 2 seconds in an async function."
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Delayed message after 2 seconds in an async function.");
}

asyncFunctionTimeout();
```

2. Custom Async Function using `setInterval`: Creating a custom async function with `setInterval`.

```javascript
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function asyncFunctionInterval() {
  console.log(
    "This message will be displayed every 3 seconds in an async function."
  );
  await delay(3000);
  console.log("Delayed message after 3 seconds in an async function.");
}

asyncFunctionInterval();
```

Remember that when using `async/await`, the function should be declared as `async`, and you can use `await` to wait for the completion of a promise-based operation (like `setTimeout` or any other asynchronous task).
