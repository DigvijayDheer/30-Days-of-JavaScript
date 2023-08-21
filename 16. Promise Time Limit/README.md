## Promise Time Limit

Given an asynchronous function `fn` and a time `t` in milliseconds, return a new **time limited** version of the input function. `fn` takes arguments provided to the **time limited** function.

The **time limited** function should follow these rules:

- If the `fn` completes within the time limit of `t` milliseconds, the **time limited** function should resolve with the result.
- If the execution of the `fn` exceeds the time limit, the **time limited** function should reject with the string `"Time Limit Exceeded"`.

#### Example 1:

```
Input:
fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
```

#### Example 2:

```
Input:
fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100}
Explanation:
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
```

#### Example 3:

```
Input:
fn = async (a, b) => {
  await new Promise(res => setTimeout(res, 120));
  return a + b;
}
inputs = [5,10]
t = 150
Output: {"resolved":15,"time":120}
Explanation:
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
```

#### Example 4:

```
Input:
fn = async () => {
  throw "Error";
}
inputs = []
t = 1000
Output: {"rejected":"Error","time":0}
Explanation:
The function immediately throws an error.
```

#### Constraints:

- `0 <= inputs.length <= 10`
- `0 <= t <= 1000`
- `fn returns a promise`

#### Hint:

1. You can return a copy of a function with: function outerFunction(fn) { return function innerFunction(...params) { return fn(...params); }; }
2. Inside the inner function, you will need to return a new Promise.
3. You can create a new promise like: new Promise((resolve, reject) => {}).
4. You can execute code with a delay with "setTimeout(fn, delay)"
5. To reject a promise after a delay, "setTimeout(() => reject('err'), delay)"
6. You can resolve and reject when the passed promise resolves or rejects with: "fn(...params).then(resolve).catch(reject)"

## Promise Time Limit in JS

In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more elegantly and efficiently, avoiding the so-called "callback hell." A Promise has three possible states: pending, fulfilled, or rejected. Once a Promise settles (either fulfilled or rejected), it cannot transition to any other state.

Promises have a built-in mechanism to handle timeouts, where you can set a time limit for how long the Promise should take to resolve. If the Promise doesn't resolve within the specified time limit, you can take appropriate action, like rejecting the Promise or performing a fallback operation.

Here's how you can implement a Promise with a time limit in JavaScript:

```javascript
function promiseWithTimeout(promise, timeout) {
  let timeoutId;

  // Create a new Promise that rejects after the specified timeout
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("Promise timed out"));
    }, timeout);
  });

  // Returns a Promise that resolves when the original Promise resolves or rejects
  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timeoutId);
  });
}
```

#### Explanation:

1. The function `promiseWithTimeout` takes two arguments:

   - `promise`: The Promise to execute.
   - `timeout`: The time limit in milliseconds.

2. Inside the function, we create a new Promise called `timeoutPromise`. This Promise will reject after the specified timeout using `setTimeout`.

3. We use `Promise.race` to race between the original Promise and the timeout Promise. The first Promise that settles (resolves or rejects) will be used to settle the returned Promise.

4. The `finally` block ensures that the timeout is cleared, whether the original Promise resolves or rejects.

Now, let's see some examples with different conditions:

**Example 1:** Resolving within the time limit

```javascript
const successPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Operation completed successfully"), 1000);
});

const timeLimit = 1500;

promiseWithTimeout(successPromise, timeLimit)
  .then((result) => {
    console.log(result); // Output: "Operation completed successfully"
  })
  .catch((error) => {
    console.error(error); // Won't be executed as the Promise resolved within the time limit.
  });
```

**Example 2:** Rejecting within the time limit

```javascript
const failurePromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Operation failed")), 2000);
});

const timeLimit = 1500;

promiseWithTimeout(failurePromise, timeLimit)
  .then((result) => {
    console.log(result); // Won't be executed as the Promise was rejected within the time limit.
  })
  .catch((error) => {
    console.error(error); // Output: Error: Operation failed (after approximately 1500 milliseconds)
  });
```

**Example 3:** Time limit exceeded

```javascript
const longRunningPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Operation completed successfully"), 2000);
});

const timeLimit = 1500;

promiseWithTimeout(longRunningPromise, timeLimit)
  .then((result) => {
    console.log(result); // Won't be executed as the Promise took longer than the time limit.
  })
  .catch((error) => {
    console.error(error); // Output: Error: Promise timed out
  });
```

These examples illustrate how to use Promises with a time limit to handle various scenarios, such as resolving within the time limit, rejecting within the time limit, and timing out when the operation takes longer than expected. The `promiseWithTimeout` function allows you to gracefully handle asynchronous operations that may take longer than desired.
