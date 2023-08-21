## Execute Asynchronous Functions in Parallel

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
