# To Be Or Not To Be

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.

- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.

- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

#### Example 1:

```
Input: func = () =>  expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5  so  this  expression  returns  true.
```

#### Example 2:

```
Input: func = () =>  expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null  so  this  expression  throw  the  error  "Not Equal".
```

#### Example 3:

```
Input: func = () =>  expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null  so  this  expression  returns  true.
```

## Solution

### Overview

This problem requires you to create a JavaScript function called `expect` that aids developers in testing their code. The function `expect` takes any value as its argument and returns an object consisting of two methods: `toBe(val)` and `notToBe(val)`.

The `toBe(val)` method accepts another value and returns `true` if the two values are strictly equal (`===`), but throws an error stating "Not Equal" if they are not. Conversely, the `notToBe(val)` method accepts another value and returns `true` if the two values are not strictly equal (`!==`), but throws an error stating "Equal" if they are.

To effectively tackle this problem, a strong grasp of JavaScript concepts such as objects, functions, and the strict equality and inequality operators (`===` and `!==`) is crucial. Additionally, it's vital to understand JavaScript's error handling mechanisms, especially the `throw` statement. The `expect` function is widely used in various testing frameworks to ascertain that specific code segments behave as intended. It can help verify that a particular function yields the correct value for a given input, or that an object's state alters as predicted when a specific method is invoked. To enhance your understanding, we recommend reviewing resources on JavaScript's [Strict Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and [Strict Inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) operators, as well as the [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) statement. If you're new to JavaScript functions, consider checking out the [Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/editorial/) editorial. For an in-depth guide on comparing values in JavaScript, the [2628. JSON Deep Equal](https://leetcode.com/problems/json-deep-equal/editorial/) editorial comes highly recommended.

#### JavaScript Objects and Function Returns

In JavaScript, functions can return objects, which are collections of related data and functions, often known as properties and methods.

Here's an example of a function that returns an object:

```javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    },
  };
}

let person = createPerson("Alice", 25);
person.greet(); // "Hello, my name is Alice and I'm 25 years old."
```

A fundamental concept in JavaScript, particularly when dealing with objects, is the use of the `this` keyword. For a deep dive into this crucial aspect of JavaScript, we highly recommend our [Array Prototype Last](https://leetcode.com/problems/array-prototype-last/editorial/) editorial.

#### JavaScript Objects and Limited Method Chaining

JavaScript objects serve as vital constructs that group related data and functions together. They can hold various data types, including functions, which are considered methods of the object when they reside within it.

In the problem at hand, the `expect` function returns an object. This object includes the `toBe` and `notToBe` methods. Although these methods can be invoked sequentially in a chain-like manner, this represents a restricted form of method chaining as they do not return the original object for further chaining, which is a key characteristic of method chaining in JavaScript programming.

Full method chaining is a common pattern in JavaScript that permits multiple methods to be invoked in a single statement. This pattern is implemented when each method returns an object, which could be the original object (for mutable objects) or a new object (for immutable objects). Full method chaining enhances readability and conciseness of the code and is a preferred pattern in many JavaScript libraries.

Here's an example of full method chaining:

```javascript
let arr = [5, 2, 8, 1];

let result = arr.sort().reverse().join("-");

console.log(result); // "8-5-2-1"
```

In this example, the `sort()` method sorts the array, the `reverse()` method subsequently reverses the sorted array, and finally, the `join("-")` method joins the elements into a string with "-" as a separator. Each of these methods returns an array, allowing the next method to be directly invoked on the result.

Within the context of the `expect` function, a restricted form of method chaining enables developers to seamlessly use the `toBe` and `notToBe` methods in a single line, as shown below:

```javascript
expect(5).toBe(5); // Returns true or throws an error
expect(5).notToBe(3); // Returns true or throws an error
```

The `expect` function returns an object containing the `toBe` and `notToBe` methods. These methods do not return the original object; instead, they either return `true` or throw an error. As such, the `expect` function provides a limited form of method chaining which, nonetheless, proves useful in numerous scenarios.

#### JavaScript Error Handling

Error handling in JavaScript is primarily accomplished through the use of `throw` statements and `try...catch` blocks. The `throw` statement allows you to create custom error messages, which can be very useful for debugging your code. There are different ways to use the `throw` statement based on what you want to achieve.

##### Throwing a string:

You can throw a string in JavaScript. It will be caught as an error message in the `catch` block.

```javascript
function checkName(name) {
  if (name === "") {
    throw "Name can't be empty!";
  }
  return name;
}

try {
  console.log(checkName(""));
} catch (error) {
  console.error(error); // "Name can't be empty!"
}
```

##### Throwing an Error instance:

A more common and recommended approach is to throw an `Error` instance. This allows additional metadata like a stack trace to be included with the error, aiding in debugging.

```javascript
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return numerator / denominator;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // "Cannot divide by zero!"
}
```

##### Throwing an Aggregated Error:

There are times when you might want to throw multiple errors at once. This is particularly useful when dealing with Promises. JavaScript has an in-built `AggregateError` object that can be used in these scenarios. The `AggregateError` object takes an iterable of error objects and an optional message as parameters.

```javascript
let error1 = new Error();
```
