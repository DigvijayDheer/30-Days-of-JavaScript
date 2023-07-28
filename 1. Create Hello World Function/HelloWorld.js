/**
 * The code provided defines a function called createHelloWorld that
 * returns an arrow function. The returned arrow function takes any
 * number of arguments using the rest parameter syntax (...args) but
 * ignores them and always returns the string "Hello World".
 */

/**===================================================================== */
// CODE
/**===================================================================== */

var createHelloWorld = function () {
  return (...args) => "Hello World";
};

/**===================================================================== */
// SAMPLE TEST CASES
/**===================================================================== */

// Example 1:
const helloWorldFn1 = createHelloWorld();
const result1 = helloWorldFn1();
console.log(result1); // Output: "Hello World"
/**
 * In this example, we first call createHelloWorld() and store the returned
 * function in the helloWorldFn variable. We then call helloWorldFn() without
 * any arguments, and it prints "Hello World" to the console.
 */

// Example 2:
const helloWorldFn2 = createHelloWorld();
const result2 = helloWorldFn2(1, 2, 3);
console.log(result2); // Output: "Hello World"
/**
 * In this case, even though we pass three arguments to helloWorldFn,
 * they are ignored, and the function still returns "Hello World".
 */

// Example 3:
const helloWorldFn3 = createHelloWorld();
const result3 = helloWorldFn3();
const result4 = helloWorldFn3("Hello", "World");
console.log(result3); // Output: "Hello World"
console.log(result4); // Output: "Hello World"
/**
 * Here, we call helloWorldFn twice, once without any arguments and
 * once with the arguments "Hello" and "World". In both cases, the
 * function ignores the arguments and returns "Hello World".
 */

// Example 4:
const createCustomHelloWorld = function (name) {
  return (...args) => `Hello ${name}`;
};
const customHelloWorldFn = createCustomHelloWorld("John");
const result = customHelloWorldFn("Extra", "Arguments");
console.log(result); // Output: "Hello John"
/**
 * In this example, we define a new function createCustomHelloWorld that
 * takes a name parameter. The returned arrow function now uses this name
 * and ignores any additional arguments, returning a customized greeting
 * with the provided name. When we call customHelloWorldFn with extra
 * arguments, they are ignored, and the result is "Hello John".
 */
