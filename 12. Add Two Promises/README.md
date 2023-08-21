## Add Two Promises

Given two promises `promise1` and `promise2`, return a new promise. `promise1` and `promise2` will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

#### Example 1:

```
Input:
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
```

#### Example 2:

```
Input:
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
```

#### Constraints:

- `promise1 and promise2 are promises that resolve with a number`

## PROMISES in JavaScript

In JavaScript, promises are a way to handle asynchronous operations. They provide a more elegant and structured way of dealing with asynchronous tasks compared to traditional callback-based approaches. Promises represent a value that may not be available yet but will be resolved at some point, either successfully or with an error.

A promise can be in one of three states:

1. **Pending**: The initial state, representing that the promise is still being processed, and the result is not available yet.
2. **Fulfilled**: The state when the promise has been successfully resolved with a value.
3. **Rejected**: The state when the promise has been rejected with an error.

Here's the basic syntax for creating and using a promise in JavaScript:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If successful, call resolve(value)
  // If there's an error, call reject(error)
});

// Consuming the promise using .then() and .catch() methods
myPromise
  .then((resolvedValue) => {
    // Handle the resolved value
  })
  .catch((error) => {
    // Handle errors if the promise is rejected
  });
```

Let's see a practical example using a simple timeout to mimic an asynchronous operation:

```javascript
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(randomNumber); // Resolve with the random number if it's less than 0.5
      } else {
        reject(new Error("Random number is greater than or equal to 0.5")); // Reject with an error otherwise
      }
    }, 1000); // Simulating an asynchronous operation that takes 1 second
  });
}

// Using the promise
asyncOperation()
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Rejected:", error.message);
  });
```

In this example, if the random number is less than 0.5, the promise will be resolved with that number. Otherwise, if the random number is greater than or equal to 0.5, the promise will be rejected with an error.

Promises are widely used in modern JavaScript and are the foundation of many other asynchronous patterns like `async/await`. They help to avoid callback hell and provide a cleaner way to handle asynchronous code.

## Adding two promises

To add two promises in JavaScript, you can use `Promise.all()` or `Promise.allSettled()` depending on the behavior you want. Both methods allow you to combine multiple promises and execute some logic once all promises are fulfilled or once all promises are settled (fulfilled or rejected).

Here's how you can add two promises using `Promise.all()`:

```javascript
function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

// Using Promise.all() to add the results of the two promises
Promise.all([asyncOperation1(), asyncOperation2()])
  .then((results) => {
    const sum = results.reduce((total, value) => total + value, 0);
    console.log("Sum of the two promises:", sum);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
```

In this example, `asyncOperation1()` and `asyncOperation2()` are two promises that resolve with the values 10 and 5, respectively. Using `Promise.all()`, we combine these two promises into an array and wait for both of them to resolve. Once both promises are fulfilled, the `then()` callback is called with an array of results, and we calculate the sum of the two values.

If you want to add two promises and get the sum regardless of whether they fulfill or reject, you can use `Promise.allSettled()`:

```javascript
// Using Promise.allSettled() to add the results of the two promises
Promise.allSettled([asyncOperation1(), asyncOperation2()]).then((results) => {
  const fulfilledResults = results.filter(
    (result) => result.status === "fulfilled"
  );
  const sum = fulfilledResults.reduce(
    (total, result) => total + result.value,
    0
  );
  console.log("Sum of the two promises:", sum);
});
```

In this case, even if any of the promises are rejected, the `then()` callback will still be called with an array of objects representing the fulfillment state of each promise, and we can extract the fulfilled values to calculate the sum.
