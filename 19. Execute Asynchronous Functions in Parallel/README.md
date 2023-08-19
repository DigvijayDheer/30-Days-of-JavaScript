# Execute Asynchronous Functions in Parallel

Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function in the array accepts no arguments and returns a promise.

`promise` resolves:

- When all the promises returned from `functions` were resolved successfully. The resolved value of `promise` should be an array of all the resolved values of promises in the same order as they were in the `functions`.

`promise` rejects:

- When any of the promises returned from `functions` were rejected. `promise` should also reject with the reason of the first rejection.

Please solve it without using the built-in `Promise.all` function.

#### Example 1:

```
Input:
functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
Output: {"t": 200, "resolved": [5]}
Explanation:
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
```

#### Example 2:

```
Input:
functions = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
Output: {"t": 100, "rejected": "Error"}
Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
```

#### Example 3:

```
Input:
functions = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
Output: {"t": 150, "resolved": [4, 10, 16]}
Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.
```

#### Constraints:

- `functions is an array of functions that returns promises`
- `1 <= functions.length <= 10`

## Asynchronous Functions in Parallel in JavaScript

In JavaScript, executing asynchronous functions in parallel refers to the process of running multiple asynchronous tasks simultaneously, without waiting for each task to complete before starting the next one. This approach can significantly improve the performance and efficiency of your code when dealing with multiple time-consuming operations.

JavaScript provides several ways to execute asynchronous functions in parallel, and two common methods are:

1. Using `Promise.all()`:
   The `Promise.all()` method is a built-in function that takes an array of promises as input and returns a new promise that resolves to an array of the resolved values when all the promises in the input array are fulfilled, or rejects with the reason of the first promise that rejects.

   Here's an example of how to use `Promise.all()` to execute asynchronous functions in parallel:

   ```javascript
   const asyncFunction1 = () =>
     new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
   const asyncFunction2 = () =>
     new Promise((resolve) => setTimeout(() => resolve("Result 2"), 2000));
   const asyncFunction3 = () =>
     new Promise((resolve) => setTimeout(() => resolve("Result 3"), 1500));

   async function executeInParallel() {
     try {
       const results = await Promise.all([
         asyncFunction1(),
         asyncFunction2(),
         asyncFunction3(),
       ]);
       console.log(results); // Output: ['Result 1', 'Result 2', 'Result 3']
     } catch (error) {
       console.error(error);
     }
   }

   executeInParallel();
   ```

   In this example, the three asynchronous functions (`asyncFunction1`, `asyncFunction2`, and `asyncFunction3`) are executed simultaneously using `Promise.all()`. The `executeInParallel()` function awaits the resolution of all the promises and logs the results when all promises have completed.

2. Using `async/await` and `Promise`:
   You can manually create and manage promises using `Promise` and `async/await`. In this approach, you create individual promises for each asynchronous function and then use `await` to wait for all promises to resolve.

   ```javascript
   const asyncFunction1 = () =>
     new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
   const asyncFunction2 = () =>
     new Promise((resolve) => setTimeout(() => resolve("Result 2"), 2000));
   const asyncFunction3 = () =>
     new Promise((resolve) => setTimeout(() => resolve("Result 3"), 1500));

   async function executeInParallel() {
     try {
       const promise1 = asyncFunction1();
       const promise2 = asyncFunction2();
       const promise3 = asyncFunction3();

       const result1 = await promise1;
       const result2 = await promise2;
       const result3 = await promise3;

       console.log([result1, result2, result3]); // Output: ['Result 1', 'Result 2', 'Result 3']
     } catch (error) {
       console.error(error);
     }
   }

   executeInParallel();
   ```

   In this example, the three asynchronous functions are executed individually as promises and then awaited sequentially. However, since they were created simultaneously, they execute concurrently, and the `console.log` statement will output the results in parallel.

Using these methods, you can effectively execute multiple asynchronous functions in parallel, leading to faster overall execution times and improved performance in your JavaScript applications.

## Solution

### Overview

In this problem, you are tasked with creating a JavaScript function named `promiseAll`, which simulates the behavior of JavaScript's built-in `Promise.all()` method without using it. The function takes an array of asynchronous functions as input, each returning a promise, and should return a new promise.

The returned promise resolves if and only if all the promises returned by the input functions resolve. In this case, the promise's resolved value should be an array containing the resolved values of all the promises in the same order as their corresponding functions in the input array. However, if any promise returned by an input function gets rejected, the returned promise should reject immediately, carrying the reason for the first promise rejection.

The problem description provides three key examples to illustrate the expected functionality. In the first example, there's a single function that resolves after a certain delay. The promise returned by our function should resolve with an array containing the value from this function. In the second example, one function rejects its promise before the other function has a chance to resolve. Consequently, the promise returned by our function should reject with the same reason as the first promise rejection. In the last example, all functions successfully resolve their promises, so the promise returned by our function should resolve with an array containing all resolved values, maintaining their original order.

Effectively solving this problem requires a good understanding of JavaScript promises and asynchronous programming. You should be familiar with how promises work, how to create new promises, and how to handle the resolution and rejection of promises.

For a comprehensive understanding of JavaScript's asynchronous programming, promises, async/await, and the event loop, If you're new to JavaScript promises, you may also find the [MDN guide on using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) helpful.

#### Working with Promises in JavaScript

In our problem, we're dealing extensively with JavaScript Promises, a concept fundamental to asynchronous programming. A Promise in JavaScript represents a value that may not be immediately available but will be available in the future, or it will never be available due to an error. A Promise can be in one of three states: **Pending**, **Fulfilled**, or **Rejected**.

In the context of our problem, understanding these states is crucial. We're dealing with a series of functions that each return a promise. We always create a new promise, and the state of this new promise depends on the states of the promises in the input array. If all promises from the array are fulfilled, our new promise resolves with all their values. If any promise from the array is rejected, our new promise rejects with the reason of the first rejected promise.

#### Promise.all()

`Promise.all()` is a built-in JavaScript method that takes an iterable of promises and returns a new promise that only fulfills when all the promises in the iterable have been fulfilled, or rejects as soon as one of the promises in the iterable rejects. The value of the `Promise.all()` promise is an array of the fulfilled values of the promises in the iterable, in the same order as the promises in the iterable.

```javascript
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
```

As you can see, `Promise.all()` is perfect when you want to run multiple promises in parallel and wait for all of them to finish. It's a great way to group promises together and only deal with their results when all of them are ready.

However, the problem at hand asks to solve it without using `Promise.all()`. This pushes us to understand the inner workings of `Promise.all()` and emulate its behavior by manually handling promises, monitoring their state, and resolving or rejecting the final promise accordingly.

It's also worth mentioning that there is a potential pitfall with `Promise.all()` to be aware of: if any of the promises passed to it reject, `Promise.all()` will immediately reject with that reason, discarding all the other promises, even if they were about to fulfill. In other words, it's an "all or nothing" approach. This behavior is, in fact, what our problem expects us to emulate. For more detailed understanding, you can refer to the [MDN documentation on Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

#### Use Cases of Promise.all() in JavaScript

1.  Aggregating API Data

In a real-world application, you might need to fetch data from several different API endpoints before you can render a page or calculate some result. Rather than waiting for each request to complete before starting the next, `Promise.all()` allows you to make all the requests at once and then wait for all of them to complete.

```javascript
let urls = [
  "https://api.github.com/users/github",
  "https://api.github.com/users/microsoft",
  "https://api.github.com/users/apple",
];

Promise.all(urls.map((url) => fetch(url).then((user) => user.json()))).then(
  (users) => {
    console.log(users.length); // 3
    console.log(users[0]); // {login: "github", ...}
  }
);
```

In this example, we use `Promise.all()` to fetch user data from multiple GitHub accounts. This speeds up the data fetching process as all requests are made concurrently.

2.  Database Transactions

In a database operation, you may need to perform multiple actions that should either all succeed or all fail. `Promise.all()` allows you to model this as a single promise that either fulfills when all the actions succeed or rejects as soon as one action fails.

```javascript
let transaction = [
  UserModel.create({ name: "Alice" }),
  AccountModel.create({ userId: "Alice", balance: 100 }),
];

Promise.all(transaction)
  .then(() => console.log("Transaction successful"))
  .catch(() => console.log("Transaction failed"));
```

In this example, we use `Promise.all()` to perform a transaction that involves creating a user and creating an account for the user. If any of these operations fail, `Promise.all()` will immediately reject, allowing us to easily roll back the transaction.

3.  Running Tasks with Interdependencies

There may be scenarios where you have multiple async tasks that depend on each other. `Promise.all()` can be handy in such situations. You can start all tasks at once and then use the results array to access the results of each task in the correct order.

```javascript
let task1 = fetch("/api/task1");
let task2 = fetch("/api/task2");

Promise.all([task1, task2]).then((results) => {
  let result1 = results[0];
  let result2 = results[1];

  // do something with the results
});
```

In this example, two network requests are made simultaneously using fetch. Once both complete, `Promise.all()` resolves with an array containing the results of both tasks in the order they were added. This can be very useful in situations where tasks have interdependencies, but can still be run concurrently.

---

### Approach 1: Emulate the behavior of Promise.all()

#### Intuition

The aim is to replicate the functionality of JavaScript's built-in `Promise.all()` method. Specifically, we need to manage an array of promise-returning functions and return a promise that resolves to an array of results, retaining the order of the original array. We will handle the resolutions of the promises ourselves, using either the modern `async/await` syntax or the classic `then/catch` syntax.

#### Algorithm

1.  Return a new promise from the `promiseAll` function.
2.  If the input array is empty, immediately resolve it with an empty array and return.
3.  Initialize an array `res` to hold the results, initially filled with `null`.
4.  Initialize a `resolvedCount` variable to track the number of promises that have been resolved.
5.  Iterate over the array of promise-returning functions. For each promise-returning function:

- In the `async/await` version, await the promise. Upon resolution, place the result in the corresponding position in the `res` array and increment the `resolvedCount`. If an error is thrown, immediately reject the promise with the error.
- In the `then/catch` version, attach a then clause and a catch clause. Upon resolution, the then clause places the result in the `res` array and increments `resolvedCount`. The catch clause rejects the promise with the error.

If all promises have resolved (i.e., `resolvedCount` equals the length of the function array), it resolves the `promiseAll()` promise with the `res` array.

The main difference between the `async/await` and `then/catch` versions lies in the syntax and the way the promises are awaited/handled, but the overall approach remains the same. Both implementations ensure that all promises are started concurrently (as opposed to sequentially), and the returned promise resolves with an array of their results, maintaining the original order.

#### Implementation

##### Implementation 1: Using async/await Syntax

```javascript
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === []) {
      resolve([]);
      return;
    }

    const res = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach(async (el, idx) => {
      try {
        const subResult = await el();
        res[idx] = subResult;
        resolvedCount++;
        if (resolvedCount === functions.length) {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};
```

This code uses the `async/await syntax`, which is more modern and often easier to read than traditional promise syntax. It initializes an array of `null` values of the same length as the input array. It then iterates over the input array with `forEach`, running each function and replacing the corresponding `null` value in the results array with the function's return value once it resolves. If all functions resolve successfully, the promise returned by `promiseAll()` resolves with the results array. If any function rejects, the promise returned by `promiseAll()` immediately rejects with the reason provided by the first function that rejected.

##### Implementation 2: Using then/catch Syntax

```javascript
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === []) {
      resolve([]);
      return;
    }

    const res = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach((el, idx) => {
      el()
        .then((subResult) => {
          res[idx] = subResult;
          resolvedCount++;
          if (resolvedCount === functions.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
```

This code is very similar to the first implementation, but uses traditional promise syntax with `then` and `catch` instead of `async/await`. Each function in the input array is run, and its `then` method is called to handle its resolution or its catch method to handle its rejection. If all functions resolve successfully, the promise returned by `promiseAll()` resolves with the results array. If any function rejects, the promise returned by `promiseAll()` immediately rejects with the reason provided by the first function that rejected.

#### Complexity Analysis

Time complexity: O(N), where N is the number of functions passed into `promiseAll()`. This is because `promiseAll()` is essentially waiting for all NNN promises to resolve or reject, so the time complexity is linear in the number of promises. Please note that this doesn't account for the time complexity of the individual functions being run as promises - it focuses on the operation of `promiseAll()` itself.

Space complexity: O(N), where N is the number of functions passed into `promiseAll()`. The space is primarily used to store the promise results. Just like the time complexity, the space complexity scales linearly with the number of promises.

## Interview Tips:

- What does `Promise.all()` do, and how does it work?

  - `Promise.all()` is a utility function in JavaScript that aggregates multiple promises into a single promise that resolves when all of the input promises have resolved, or rejects as soon as any one of the input promises rejects. It's often used when multiple asynchronous operations need to be performed concurrently, and further computation depends on the completion of all of these operations.

- What happens if one of the promises passed into `Promise.all()` rejects?

  - If any of the promises passed into `Promise.all()` rejects, the promise returned by `Promise.all()` immediately rejects with the reason of the first promise that rejected. This behavior is sometimes called "fail-fast".

- How can you handle individual promise rejections in `Promise.all()`?

  - To handle individual promise rejections in `Promise.all()`, you could catch errors in individual promises and transform them into a resolution with an error value. This allows `Promise.all()` to always resolve, and error handling can then be performed on the resulting array of values. However, starting with ECMAScript 2020, a better alternative would be to use `Promise.allSettled()`.

- What is the difference between `Promise.all()` and `Promise.allSettled()`?

  - The `Promise.allSettled()` method is similar to `Promise.all()`, but with a key difference. While `Promise.all()` rejects as soon as one of the promises rejects, `Promise.allSettled()` always resolves after all the promises have settled, i.e., either fulfilled or rejected. The resolved value of `Promise.allSettled()` is an array of objects that each describe the outcome of each promise.
