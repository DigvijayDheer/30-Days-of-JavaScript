# Timeout Cancellation

Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

After a delay of `t`, `fn` should be called with `args` passed as parameters unless `cancelFn` was invoked before the delay of `t` milliseconds elapses, specifically at `cancelT` ms. In that case, `fn` should never be called.

#### Example 1:

```
Input: fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
Output: [{"time": 20, "returned": 10}]
Explanation:
const cancel = cancellable((x) => x * 5, [2], 20); // fn(2) called at t=20ms
setTimeout(cancel, 50);

The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened after the execution of fn(2) at 20ms.
```

#### Example 2:

```
Input: fn = (x) => x**2, args = [2], t = 100, cancelT = 50
Output: []
Explanation:
const cancel = cancellable((x) => x**2, [2], 100); // fn(2) not called
setTimeout(cancel, 50);

The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
```

#### Example 3:

```
Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100
Output: [{"time": 30, "returned": 8}]
Explanation:
const cancel = cancellable((x1, x2) => x1 * x2, [2,4], 30); // fn(2,4) called at t=30ms
setTimeout(cancel, 100);

The cancellation was scheduled to occur after a delay of cancelT (100ms), which happened after the execution of fn(2,4) at 30ms.
```

#### Constraints:

- `fn is a function`
- `args is a valid JSON array`
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelT <= 1000`

## clearTimeout() in JavaScript

`clearTimeout` is a built-in function in JavaScript that allows you to cancel a previously scheduled timeout set by the `setTimeout` function. When you use `setTimeout`, it creates a timer that triggers a specified function after a certain delay. However, if you realize that you don't want the function to be executed anymore or if you want to change the execution timing, you can use `clearTimeout` to cancel that scheduled timeout before it runs.

The syntax for `clearTimeout` is straightforward:

```javascript
clearTimeout(timeoutID);
```

Here, `timeoutID` is the identifier returned by the `setTimeout` function when you initially set the timeout. By passing the same `timeoutID` to `clearTimeout`, you effectively cancel the associated timeout, preventing the specified function from being executed.

Let's look at some examples to better understand how `clearTimeout` works:

**Example 1:** Basic clearTimeout usage

```javascript
function delayedAlert() {
  console.log("Delayed alert!");
}

const timeoutID = setTimeout(delayedAlert, 2000);

// Later, you decide to cancel the scheduled alert
clearTimeout(timeoutID);
```

In this example, we create a function called `delayedAlert` that logs "Delayed alert!" to the console. We then use `setTimeout` to schedule this function to execute after a delay of 2000 milliseconds (2 seconds). However, before the 2 seconds elapse, we decide to cancel the scheduled alert using `clearTimeout`.

**Example 2:** Using clearTimeout with a named function

```javascript
function delayedMessage(message) {
  console.log(message);
}

const messageTimeoutID = setTimeout(
  delayedMessage,
  3000,
  "This message was delayed."
);

// Later, you decide to cancel the scheduled message
clearTimeout(messageTimeoutID);
```

In this example, we use a function `delayedMessage` that takes a `message` parameter and logs it to the console. We set up a timeout with `setTimeout` and pass the `delayedMessage` function along with the message and the delay of 3000 milliseconds (3 seconds). We can then cancel the scheduled message using `clearTimeout` if needed.

**Example 3:** Cancelling clearTimeout based on a condition

```javascript
let shouldShowAlert = true;

function showAlert() {
  console.log("Alert!");
  shouldShowAlert = false; // Stop showing alerts after the first one
}

function scheduleAlert() {
  if (shouldShowAlert) {
    const alertTimeoutID = setTimeout(showAlert, 1000);
  }
}

scheduleAlert(); // Will log "Alert!" after 1 second

// Later, under some condition, you decide to cancel the scheduled alert
if (someCondition) {
  clearTimeout(alertTimeoutID);
}
```

In this example, we have a `shouldShowAlert` variable that controls whether the alert should be displayed or not. We have a function called `showAlert` that logs "Alert!" to the console and sets `shouldShowAlert` to `false` after the first alert. The `scheduleAlert` function sets up a timeout to call `showAlert` after 1000 milliseconds (1 second) if `shouldShowAlert` is still true. However, later in the code, we can decide to cancel the scheduled alert based on some condition using `clearTimeout`.

Remember that `clearTimeout` will have no effect if the specified timeout has already been executed, or if the `timeoutID` is invalid. So, it's essential to ensure that you call `clearTimeout` with the correct `timeoutID` before the scheduled timeout takes place.

Using `clearTimeout` effectively involves understanding its purpose and knowing when and how to use it to cancel scheduled timeouts. Here are some tips to use `clearTimeout` effectively:

1. Store the Timeout ID: When you use `setTimeout`, make sure to store the returned Timeout ID in a variable. This ID is essential for canceling the timeout later using `clearTimeout`. If you don't store the ID, you won't be able to cancel the scheduled timeout.

```javascript
const timeoutID = setTimeout(() => {
  console.log("This will execute after a delay.");
}, 2000);

// Later, if you want to cancel the timeout
clearTimeout(timeoutID);
```

2. Plan Timeout Cancellation: Decide in advance when you might need to cancel the timeout. If there's a specific condition or user action that could trigger the cancellation, include it in your code. Always check for such conditions before calling `clearTimeout`.

```javascript
const delay = 5000;
let shouldCancelTimeout = false;

const timeoutID = setTimeout(() => {
  if (!shouldCancelTimeout) {
    console.log("Timeout executed successfully.");
  }
}, delay);

// Later, under some condition or user action
if (someCondition) {
  shouldCancelTimeout = true;
  clearTimeout(timeoutID);
}
```

3. Scope of the Timeout ID: Make sure the variable containing the Timeout ID is accessible in the scope where you intend to cancel the timeout. If the variable is out of scope, you won't be able to use `clearTimeout`.

```javascript
function scheduleTimeout() {
  const timeoutID = setTimeout(() => {
    console.log("Timeout executed.");
  }, 3000);

  // This won't work because timeoutID is not accessible here.
  // clearTimeout(timeoutID);
}

// To cancel the timeout, the timeoutID must be accessible in the same scope it's created.
```

4. Be cautious with asynchronous operations: If your code includes asynchronous operations or event listeners, ensure that the scope and timing of the `clearTimeout` call align with your expectations. Race conditions can lead to unexpected behavior.

```javascript
function showAlertAfterDelay() {
  const timeoutID = setTimeout(() => {
    console.log("Alert after delay.");
  }, 2000);

  // Some asynchronous operation that may complete before the timeout.
  fetchSomeData().then(() => {
    clearTimeout(timeoutID); // Be cautious with this, as the fetch may complete before the timeout.
  });
}
```

By following these guidelines, you can use `clearTimeout` effectively to manage scheduled timeouts in your JavaScript code and ensure smooth and predictable execution of your functions.

## Solution

### Overview:

We need to create a function that executes a given function after a specified delay, unless a cancel function `cancelFn` is called before the delay expires. The cancel function should prevent the execution of the delayed function.

### Closures:

In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. The lexical environment consists of the variables, functions, and scopes available at the time of the closure's creation.

**Working:**

- When a function is defined inside another function, a closure is created. The inner function retains a reference to the variables and scope of its outer function.
- When the outer function finishes executing and returns, the closure is still intact with its captured variables and scope chain.
- The closure allows the inner function to access and manipulate the variables of its outer function, even if the outer function's execution has completed.
- This behavior is possible because the closure maintains a reference to its outer function's variables and scope chain, preventing them from being garbage collected.

Refer to this editorial for a deeper understanding of closures: [Counter](https://leetcode.com/problems/counter/editorial/)

In the context of the problem, closures are used to maintain a reference to the timer variable even after the function that creates the closure has returned. This allows the `cancelFn` function to access and modify the timer variable, effectively canceling the execution of the delayed function.

### setTimeout:

`setTimeout` is a built-in function in JavaScript that allows you to schedule the execution of a function after a specified delay. It can take infinite number of arguments but usually its first two argumentss are always a function to be executed and a delay time in milliseconds.

> Note: `setTimeout` is actually a [variadic function that can accept an infinite number of arguments](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

Here's an example of how to use `setTimeout`:

```javascript
function delayedFunction() {
  console.log("Delayed function executed!");
}
const delay = 2000;
const timerId = setTimeout(delayedFunction, delay);
// To cancel the execution before the delay expires:
clearTimeout(timerId);
```

**Working:**

- When `setTimeout` is called, it starts a timer and sets it to run after the specified delay.
- After the delay expires, the JavaScript event loop puts the specified function in the execution queue.
- Once the call stack is empty, the function is executed, and any associated code inside it is run.
- If the `setTimeout` function is canceled before the delay expires, the scheduled function will not be executed.

> Refer to this editorials for a more deeper understanding of `setTimeout`:
>
> 1.  [Cache with time limit](https://leetcode.com/problems/cache-with-time-limit/editorial/)
> 2.  [Debounce](https://leetcode.com/problems/debounce/editorial/)
> 3.  [Throttle](https://leetcode.com/problems/throttle/editorial/)

In the context of the problem, `setTimeout` is used inside the `cancellable` function to schedule the execution of the delayed function (`fn`) after the specified delay (`t`).

Overall, `closures` and `setTimeout` work together in this problem to create a cancelable delayed function execution mechanism. The closure preserves the reference to the `timeoutId` variable, and `setTimeout` schedules the execution of the function after the specified delay.

## Approach 1: Using Closure

### Intuition:

We can use the `setTimeout` function to schedule the execution of the delayed function `fn` after the specified timeout `t`. Then we use `apply` method to pass the arguments from the `args` array to `fn`.  
Also by storing the timer ID returned by `setTimeout` in the `timeoutId` variable, we can cancel the execution of the delayed function by calling `clearTimeout` with the `timeoutId`.

### Algorithm:

- Inside the `cancellable` function, we use `setTimeout` to schedule the execution of `fn` after the specified timeout `t`. The `fn` function is called using the `apply` method to pass the `args` array as arguments. Additionally the `setTimeout` function returns a timer ID, which is stored in the `timeoutId` variable.
- After that a `cancelFn` function is defined, which calls `clearTimeout` with the `timeoutId` to cancel the execution of the delayed function.
- Finally, the `cancelFn` function is returned from the cancellable function.

### Implementation:

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(function () {
    fn.apply(null, args);
  }, t);

  const cancelFn = function () {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};
```

### Complexity Analysis:

- **Time complexity:** O(1)
- **Space complexity:** O(1)

> While the time and space complexity of the cancellable function itself is O(1), it's important to note that the time complexity of the function `fn` that is passed as an argument can have some different complexity.

## Approach 2: Using Boolean flag

### Intuition:

We can use a boolean variable which decides whether calling function `fn` is allowed or not.

### Algorithm:

- Initialize a boolean variable `isCancelled` as `false` to track the cancellation status.
- Use `setTimeout()` to schedule the execution of `fn` after a delay of `t` milliseconds, but only if `isCancelled` is `false`.
- Return a function that flips the value of `isCancelled` to `true`, canceling the execution of `fn`. The cancellation function ensures that `fn` will never be called if it is invoked before the delay expires.

> While this approach does prevent the `fn` function from being executed if the cancel function is invoked, it's worth noting that the `setTimeout` callback still gets executed when the delay is over. This means that even when cancelled, the function still uses up a slot in the JavaScript event loop queue. As such, in terms of computational efficiency, this approach might be slightly less efficient than Approach 1, which cancels the `setTimeout` entirely.

### Implementation:

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let isCancelled = false;
  setTimeout(() => {
    if (!isCancelled) fn(...args);
  }, t);

  return () => {
    isCancelled = true;
  };
};
```

### Complexity Analysis:

- **Time complexity:** O(1)
- **Space complexity:** O(1)

> While the time and space complexity of the cancellable function itself is O(1), it's important to note that the time complexity of the function `fn` that is passed as an argument can have some different complexity.

## Interview Tips:

- Can you explain the role of the `apply` method used in the `setTimeout` callback?

  - The `apply` method is used to invoke the delayed function `fn` with the provided args array as its arguments. It allows us to dynamically pass the arguments from the args array to `fn`. This ensures that the correct arguments are passed when `fn` is eventually executed.
  - Additionally using `apply` with `null` as the first argument allows us to invoke the function without specifying a specific context (`this` value). Since the delayed function execution doesn't rely on a specific context, using `null` is appropriate.

- How can you handle scenarios where the delayed function requires a specific context (this value) for execution?

  - In cases where the delayed function relies on a specific context (`this` value), you can use the bind method to `bind` the desired context to `fn`. This creates a new function with the specified context, and you can then pass the bound function to `setTimeout` for delayed execution.

- Is it possible to modify the implementation to allow for multiple delayed function executions with different timeouts?

  - Yes, it is possible to modify the solution to handle multiple delayed function executions. You can create an array to store the timeoutId values for each scheduled execution. The cancellation function can then clear all the timeout IDs in the array, effectively cancelling all pending executions.

- What are some potential use cases for a cancellable function with a delay?

  - A cancellable function with delay can be quite useful in scenarios where an action needs to be scheduled after a certain delay, but there may also be conditions under which that action should be prevented from executing. For instance, consider a scenario in a user interface where a notification is to be shown after a certain delay when a user performs a specific action. However, if the user performs a different action that makes the notification irrelevant, the scheduled display of the notification can be cancelled.
  - Another scenario could be in a gaming context, where an action is scheduled to occur after a delay, but intervening user actions or game events might necessitate cancelling that scheduled action. It's important to note that these use cases differ from debouncing or throttling scenarios, which aim to control the rate of function invocation rather than scheduling and possibly cancelling actions.

- What are the potential drawbacks or limitations of using `setTimeout` for scheduling the delayed function execution?

  - One limitation is that `setTimeout` is not precise and can be affected by other factors like system load. If precise timing is required, alternative methods like Web Workers or the Web Animation API are used in some cases but they serve different purposes and cannot always be used as direct substitutes for `setTimeout`.
  - A more precise timing control could be achieved using the `performance.now()` method, which provides timestamps with sub-millisecond resolution for measurements, but it still wouldn't be able to guarantee that a function will run exactly after a specified delay due to the single-threaded nature of JavaScript.

- Is it possible to modify the cancellable function to support a delay that can be dynamically changed during execution?

  - Yes, it is possible to enhance the cancellable function to support dynamic changes in the delay. You can modify the implementation to store the timeout ID and use `clearTimeout` before setting a new timeout with the updated delay.

- Can you explain the concept of "debouncing" and how it relates to the cancellable function with a delay?

  - Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, which can be especially valuable in situations such as the handling of user input events where an event might fire frequently and rapidly. The core concept of debouncing is setting a delay before executing the function and then resetting that delay every time the function is requested before the delay expires.
  - While a cancellable function with a delay shares similarities with debouncing, as both involve a delayed function execution that can be prevented, they are not inherently linked. A cancellable function is more suited to scenarios where an action or computation can be made obsolete before it's executed. On the other hand, debouncing typically does not involve the explicit creation of a cancellable function; instead, it clears and resets the timer directly within the function.
