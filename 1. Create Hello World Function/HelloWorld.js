/**
 * @return {Function}
 */

var createHelloWorld = function () {
  return (...args) => "Hello World";
};

// Example 1:
const helloWorldFn1 = createHelloWorld();
const result1 = helloWorldFn1();
console.log(result1);

// Example 2:
const helloWorldFn2 = createHelloWorld();
const result2 = helloWorldFn2(1, 2, 3);
console.log(result2);

// Example 3:
const helloWorldFn3 = createHelloWorld();
const result3 = helloWorldFn3();
const result4 = helloWorldFn3("Hello", "World");
console.log(result3);
console.log(result4);

// Example 4:
const createCustomHelloWorld = function (name) {
  return (...args) => `Hello ${name}`;
};
const customHelloWorldFn = createCustomHelloWorld("John");
const result = customHelloWorldFn("Extra", "Arguments");
console.log(result);
