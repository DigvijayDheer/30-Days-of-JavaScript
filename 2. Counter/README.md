# Counter

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

#### Example 1:

```
Input: n = 10 ["call","call","call"]
Output: [10,11,12]
Explanation:
counter() = 10  // The first time counter() is called, it returns n.
counter() = 11  // Returns 1 more than the previous time.
counter() = 12  // Returns 1 more than the previous time.
```

#### Example 2:

```

Input: n = -2 ["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially  returns -2.  Then  increases  after  each  sebsequent  call.
```

#### Constraints

- `-1000 <= n <= 1000`.
- `At most 1000 calls to counter() will be made`.

#### Hint

1. In JavaScript, a function can return a closure. A closure is defined as a function and the variables declared around it (its lexical environment).
2. A count variable can be initialized in the outer function and mutated in the inner function. This allows the inner function to "remember" the value of the count across multiple calls.

## Solution

### Overview

This question is intended as an introduction to _**closures**_. In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are known as the function's _**lexical environment**_. The combination of the function and it's environment is known as a _**closure**_.

### Closures in JavaScript

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

#### Closure Example

In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it.

```javascript
function createAdder(a) {
  return function add(b) {
    const sum = a + b;
    return sum;
  };
}
const addTo2 = createAdder(2);
addTo2(5); // 7
```

The inner function `add` has access to `a`. This allows the outer function to serve as a factory of new functions, each with different behavior.

#### Closures Versus Classes

You may notice that in the above example `createAdder` is very similar to a class constructor.

```javascript
class Adder {
  constructor(a) {
    this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}
const addTo2 = new Adder(2);
addTo2.add(5); // 7
```

Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

One key difference is that closures allow for true _**encapsulation**_. In the class example, there is nothing stopping you from writing `addTo2.a = 3;` and breaking it's expected behavior. However, in the closure example, it is theoretically impossible to access `a`. Note that as of 2022, true encapsulation is achievable in classes with [# prefix syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores a single reference to the _**prototype object**_ where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, classes can be more efficient, particularly in the case where there are many methods.

Unlike in languages like Java, you will tend to see code written with functions rather than with classes. But since JavaScript is a multi-paradigm language, it will depend on the particular project you are working on.

#### Approach 1: Increment Then Return

We declare a variable `currentCount` and set it equal to `n - 1`. Then inside the counter function, increment `currentCount` and return the value. Note that since `currentCount` is modified, it should be declared with `let` rather than `const`.

**Implementation**

```javascript
var createCounter = function (n) {
  let currentCount = n - 1;
  return function () {
    currentCount += 1;
    return currentCount;
  };
};
```

#### Approach 2: Postfix Increment Syntax

JavaScript provides convenient syntax that returns a value and _**then**_ increments it. This allows us to avoid having to initially set a variable to `n - 1`.

**Implementation**

```javascript
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
```

#### Approach 3: Prefix Decrement and Increment Syntax

JavaScript also has syntax that allows you to increment a value and _**then**_ return it. Because the increment happens before the value is returned, we must first decrement the value initially similar to Approach 1.

**Implementation**

```javascript
var createCounter = function (n) {
  --n;
  return function () {
    return ++n;
  };
};
```

#### Approach 4: Postfix Increment Syntax With Arrow Function

We can reduce the amount of code in Approach 2 by using an arrow function with an implicit return.

**Implementation**

```javascript
var createCounter = function (n) {
  return () => n++;
};
```
