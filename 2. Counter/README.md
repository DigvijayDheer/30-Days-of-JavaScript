# Counter

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

### Example 1:

```javascript
Input:
n = 10
["call","call","call"]
Output: [10,11,12]
Explanation:
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
```

### Example 2:

```javascript
Input:
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
```

## Constraints

- `-1000 <= n <= 1000`.
- `At most 1000 calls to counter() will be made`.

### Hint

1. In JavaScript, a function can return a closure. A closure is defined as a function and the variables declared around it (its lexical environment).
2. A count variable can be initialized in the outer function and mutated in the inner function. This allows the inner function to "remember" the value of the count across multiple calls.

# CLOSURE IN JS

- In JavaScript, a closure is a powerful and important concept related to how functions work with their lexical environment. A closure occurs when a function is defined within another function and retains access to its parent function's scope even after the parent function has finished executing.

- Here's a more formal definition of a closure: A closure is a function along with its lexical environment, which consists of all the variables, functions, and other data that were present at the time the closure was created. The closure "closes over" these variables, allowing the inner function to access and use them even when the outer function has completed its execution.

Let's understand this with an example:

```javascript
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: "I am from outer function"
```

In this example, `innerFunction` is defined within `outerFunction`, and it has access to the `outerVariable` defined in its parent function. When `outerFunction` is called, it returns `innerFunction`, and `closureFunction` becomes a closure that retains access to the `outerVariable` even after `outerFunction` has finished executing.

Closures are often used to create private variables and encapsulation in JavaScript. They enable you to create functions with hidden state or data that cannot be directly accessed from outside the function. This is a useful feature for maintaining data privacy and reducing potential conflicts with other parts of your code.

Here's an example of using closures for private variables:

```javascript
function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement,
  };
}

const myCounter = counter();
myCounter.increment(); // Output: 1
myCounter.increment(); // Output: 2
myCounter.decrement(); // Output: 1
```

In this example, the `counter` function returns an object containing `increment` and `decrement` functions. These functions have access to the `count` variable within the closure, allowing them to maintain their own private state. The `count` variable is not directly accessible from outside the `counter` function, ensuring data encapsulation.
